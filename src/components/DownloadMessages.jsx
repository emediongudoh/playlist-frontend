import PropTypes from 'prop-types';

function DownloadMessages({ messages, downloading }) {
    return (
        <div className='h-screen overflow-y-auto bg-raisin_black p-6'>
            <h2 className='text-center text-xl italic'>
                {downloading
                    ? 'Downloading your playlist, you bummer 😁😁...'
                    : 'Playlist Plunge Download Messages'}
            </h2>

            <ul>
                {messages.map((message, index) => (
                    <li
                        key={index}
                        className='mt-4 text-sm text-cadet_gray'
                    >
                        {message}
                    </li>
                ))}
            </ul>
        </div>
    );
}

DownloadMessages.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.string).isRequired,
    downloading: PropTypes.bool.isRequired,
};

export default DownloadMessages;
