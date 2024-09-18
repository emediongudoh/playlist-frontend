import PropTypes from 'prop-types';

// Component imports
import HeroText from './HeroText';
import SearchForm from './SearchForm';

function ContentFul({
    playlistUrl,
    handleUrlChange,
    handleDownload,
    downloading,
}) {
    return (
        <div className='flex h-screen flex-col items-center justify-center gap-4 p-6 text-center'>
            <HeroText />

            <SearchForm
                playlistUrl={playlistUrl}
                handleUrlChange={handleUrlChange}
                handleDownload={handleDownload}
                downloading={downloading}
            />

            <p className='absolute bottom-0 p-4 text-sm text-cadet_gray'>
                Your playlist videos are snagged to a `PlaylistPlunge` folder in
                your `Downloads` directory.
            </p>
        </div>
    );
}

ContentFul.propTypes = {
    playlistUrl: PropTypes.string.isRequired,
    handleUrlChange: PropTypes.func.isRequired,
    handleDownload: PropTypes.func.isRequired,
    downloading: PropTypes.bool.isRequired,
};

export default ContentFul;
