import { useState } from 'react';

// Component imports
import ContentFul from './components/ContentFul';
import DownloadMessages from './components/DownloadMessages';

function App() {
    const [playlistUrl, setPlaylistUrl] = useState('');
    const [messages, setMessages] = useState([]);
    const [downloading, setDownloading] = useState(false);

    const handleUrlChange = e => {
        setPlaylistUrl(e.target.value);
    };

    const handleDownload = e => {
        e.preventDefault();
        setMessages([]);
        setDownloading(true);

        // Send a request to initiate the download
        fetch(
            `${import.meta.env.VITE_BACKEND_URL}/download?url=${encodeURIComponent(playlistUrl)}`
        )
            .then(() => {
                // Once the request is sent, start listening to the real-time updates via SSE
                const eventSource = new EventSource(
                    `${import.meta.env.VITE_BACKEND_URL}/download?url=${encodeURIComponent(playlistUrl)}`
                );

                eventSource.onmessage = event => {
                    const data = JSON.parse(event.data);
                    setMessages(prevMessages => [
                        ...prevMessages,
                        data.message,
                    ]);

                    if (data.message.includes('Process exited with code')) {
                        setDownloading(false);
                        eventSource.close();
                    }
                };

                eventSource.onerror = err => {
                    console.error(`🥹 ${err}`);
                    setDownloading(false);
                    eventSource.close();
                };
            })
            .catch(err => {
                console.error(`🥹 ${err}`);
                setDownloading(false);
            });
    };

    return (
        <div className='grid min-h-screen grid-cols-12'>
            <div className='col-span-full md:col-span-8'>
                <ContentFul
                    playlistUrl={playlistUrl}
                    handleUrlChange={handleUrlChange}
                    handleDownload={handleDownload}
                    downloading={downloading}
                />
            </div>
            <div className='col-span-full md:col-span-4'>
                <DownloadMessages
                    messages={messages}
                    downloading={downloading}
                />
            </div>
        </div>
    );
}

export default App;
