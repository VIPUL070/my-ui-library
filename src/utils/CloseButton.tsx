const CloseButton = () => {
  return (
    <div
      className="w-10 h-10 ric-modal-close-button-wrapper"
      data-modal-close-button-wrapper=""
    >
      <button
        aria-label="Close safety section."
        className="w-full h-full flex items-center justify-center bg-black hover:bg-neutral-800 text-white rounded-full transition-colors ric-modal-close-button"
        data-modal-close-button=""
        data-modal-close=""
      >
        <span 
          className="w-6 h-6 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:fill-current ric-modal-close-icon" 
          data-modal-close-icon=""
        >
          <svg
            className="icon-control icon-control-close"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 36 36"
          >
            <path d="m20.1211 18 3.4395-3.4395c.5859-.5854.5859-1.5356 0-2.1211-.5859-.5859-1.5352-.5859-2.1211 0l-3.4395 3.4395-3.4395-3.4395c-.5859-.5859-1.5352-.5859-2.1211 0-.5859.5854-.5859 1.5356 0 2.1211l3.4395 3.4395-3.4395 3.4395c-.5859.5854-.5859 1.5356 0 2.1211.293.293.6768.4395 1.0605.4395s.7676-.1465 1.0605-.4395l3.4395-3.4395 3.4395 3.4395c.293.293.6768.4395 1.0605.4395s.7676-.1465 1.0605-.4395c.5859-.5854.5859-1.5356 0-2.1211l-3.4395-3.4395z"></path>
          </svg>{" "}
        </span>
      </button>
    </div>
  );
};

export default CloseButton