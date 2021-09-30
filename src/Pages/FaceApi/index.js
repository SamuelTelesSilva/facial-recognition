import React, {useState, useEffect, useRef} from 'react';
import { Container } from './styles';
import useWindowDimensions from '../../components/useWindowDimensions/index';
import * as faceap from 'face-api.js';



const FaceApi = () => {
    const {width, height} = useWindowDimensions();

    let videoHeight = 480; 
    let videoWidth = 640;

    if(width < 600){
        videoHeight = height-100
        videoWidth = width-100
    }

     
    const [initializing, setInitializing] = useState(false);
    const videoRef = useRef();
    const canvasRef = useRef();


    const [autenticado, setAutenticado] = useState(false);
    localStorage.setItem('Autenticado', autenticado)
   

    useEffect(()=>{
        const loadModels = async () => {
            const MODEL_URL = process.env.PUBLIC_URL + '/models';
            setInitializing(true);

            Promise.all([
                faceap.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
                faceap.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
                faceap.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
                faceap.nets.faceExpressionNet.loadFromUri(MODEL_URL),
                faceap.nets.ageGenderNet.loadFromUri(MODEL_URL),
                faceap.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),

            ]).then(startVideo);
        }
        loadModels();
    },[]);

    /*
    //Webcam Padrão
    const startVideo = () => {
        navigator.mediaDevices.enumerateDevices()
        .then(devices => {
            if (Array.isArray(devices)) {
                devices.forEach(device => {
                    if (device.kind === 'videoinput') {                   
                        navigator.getUserMedia(
                            { video: {
                                deviceId: device.deviceId
                            }},
                            stream => videoRef.current.srcObject = stream,
                            error => console.error(error)
                        )
                    }
                })
            }
        })
    }
    */


    //Escolher a Web Cam
    const startVideo = () => {
        navigator.mediaDevices.enumerateDevices()
        .then(devices => {
            if (Array.isArray(devices)) {
                devices.forEach(device => {

                    console.log(devices) //Mostra as WebCam conectadas

                    if (device.kind === 'videoinput') {                   
                        if (device.label.includes('DroidCam Source 3')) { //Coloca o nome label
                            
                            navigator.getUserMedia(
                                { video: {
                                    deviceId: device.deviceId
                                }},
                                stream => videoRef.current.srcObject = stream,
                                error => console.error(error)
                            )
                        }
                    }
                })
            }
        })
    }

    const loadLabels = () => {
        const LABEL_URL = process.env.PUBLIC_URL + '/assets/labels';
        
        const labels = ['Thiago Graziani Traue'];

        return Promise.all(labels.map(async label => {
            const descriptions = []
            for (let i = 1; i <= 2; i++) {
                const img = await faceap.fetchImage(`${LABEL_URL}/${label}/${i}.jpeg`)
                const detections = await faceap
                    .detectSingleFace(img)
                    .withFaceLandmarks()
                    .withFaceDescriptor()
                descriptions.push(detections.descriptor)
            }
            return new faceap.LabeledFaceDescriptors(label, descriptions)
        }))
    }
    
    const handleVideoOnPlay = () => {

        setInterval( async () => {
            if(initializing){
                setInitializing(false);
            }

            canvasRef.current.innerHTML = faceap.createCanvasFromMedia(videoRef.current); 
            const displaySize = {
                width: videoWidth,
                height: videoHeight
            }
            faceap.matchDimensions(canvasRef.current, displaySize); 
            const labels = await loadLabels()            
            
            
            const detections = await faceap
                .detectAllFaces(
                    videoRef.current, 
                    new faceap.TinyFaceDetectorOptions()
                )
                .withFaceLandmarks()
                .withFaceExpressions()
                .withAgeAndGender()
                .withFaceDescriptors();

            const resizedDetections = faceap.resizeResults(detections, displaySize);
            
            
            const faceMatcher = new faceap.FaceMatcher(labels, 0.6);
            const results = resizedDetections.map(d =>
                faceMatcher.findBestMatch(d.descriptor)
            )
            

            canvasRef.current.getContext('2d').clearRect(0,0, videoWidth, videoHeight);
            faceap.draw.drawDetections(canvasRef.current, resizedDetections);
            faceap.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);
            faceap.draw.drawFaceExpressions(canvasRef.current, resizedDetections);


            //years and gender
            resizedDetections.forEach(detection => {
                const { age, gender, genderProbability } = detection
                new faceap.draw.DrawTextField([
                    `${parseInt(age, 10)} years`,
                    `${gender} (${parseInt(genderProbability * 100, 10)})`
                ], detection.detection.box.topRight).draw(canvasRef.current)
            })   

            //
            results.forEach((result, index) => {
                const box = resizedDetections[index].detection.box
                const { label, distance } = result
                new faceap.draw.DrawTextField([
                    `${label} (${parseInt(distance * 100, 10)})`
                ], box.bottomRight).draw(canvasRef.current)
    

                if(label === 'Thiago Graziani Traue'){
                    setAutenticado(true)
                }
            })



            console.log(detections)

        }, 100)
    }


    return(
        <Container>
            <div className="cont-video">
                <video
                    autoPlay
                    ref={videoRef}
                    muted
                    height={videoHeight}
                    width={videoWidth}
                    onPlay={handleVideoOnPlay}
                />
                <canvas ref={canvasRef} className="canvas"/>
            </div>
            {
                autenticado ? (
                    <div className="cont-msg">
                        <h2>
                            Boa Noite, Prof. Thiago Graziani Traue 
                        </h2>
                    </div>
                ):(
                    <div className="cont-msg">
                        { initializing ? 
                            <h2>Fazendo Reconhecimento Facial</h2> :
                            <h2>Carregando...</h2>
                        }
                        
                    </div>
                )   
            }
        </Container>
    );
}
export default FaceApi;
