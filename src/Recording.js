import React from 'react'
import './Recording.css';
import { useState } from 'react';
import { ReactMic } from 'react-mic';
import { saveAs } from 'file-saver';

function Recording() {
    const [isRecording, setIsRecording] = useState(false);
    const [recordedBlob, setRecordedBlob] = useState(null);

    const startRecording = () => {
        setIsRecording(true);
    };

    const stopRecording = () => {
        setIsRecording(false);
    };

    const onData = (recordedBlob) => {
        console.log('chunk of real-time data is: ', recordedBlob);
    };

    const onStop = (recordedBlob) => {
        console.log('recordedBlob is: ', recordedBlob);
        setRecordedBlob(recordedBlob);
    };
    const saveRecording = () => {
        if (recordedBlob) {
            const blob = new Blob([recordedBlob.blob], { type: 'audio/mp3' });
            saveAs(blob, 'recorded_audio.mp3');
        }
    };

    return (
        <>
            <p className='mic'>   <ReactMic
                record={isRecording}
                onStop={onStop}
                onData={onData}
                mimeType="audio/mp3"
            />
            </p>
            <div className='container-fluid outer_section'>  
                <div className='main_cntnr'>                 
                    <h1> FREE ONLINE VOICE RECORDER</h1>
                    <p className='mb-5'> The Premier High Quality Voice Recording Service.
                        It is a quick and easy way to share voice messages over the Internet.
                    </p>

                    <div>
                        <button className={isRecording ? 'start_btn' : 'stop_btn'} ></button>
                        <p>Click the start button to start recording...</p>
                        <i class='fas fa-microphone' ></i>
                        <button className='btn btn-primary mx-2 sv_btn' onClick={startRecording} disabled={isRecording}>Start</button>
                        <button className='btn btn-danger mx-2 sv_btn' onClick={stopRecording}>Stop</button>
                        <button className='btn btn-success mx-2 sv_btn1' onClick={saveRecording} disabled={!recordedBlob}>Save Recording</button>
                    </div>

                    <div className='row my-5 mx-5'>
                        <div class="col-sm-4">
                            <h4>Online Voice Recorder</h4>
                            <div class="line"></div>
                            <p>Our Voice Recorder is a convenient and simple online tool that can be used right in your browser. It allows you to record your voice using a microphone and save it as an mp3 file.</p> 
                        </div> 
                        <div class="col-sm-4">
                            <h4>Free to use</h4> 
                            <div class="line"></div> 
                            <p>Voice Recorder is completely free. No hidden payments, activation fees, or charges for extra features.</p> 
                        </div>
                        <div class="col-sm-4"> 
                            <h4>Privacy guaranteed</h4> 
                            <div class="line"></div> 
                            <p>We guarantee that our app is secure. Everything you record is accessible to you alone nothing is uploaded to our servers for storage.</p> 
                        </div> 
                    </div>
                    
                </div>
            </div>
            <footer className='footer_cnt'>
                <span>Copyright @ 2023 , Made with &#10084; by TechAni</span>
            </footer>
        </>
    )
}

export default Recording;