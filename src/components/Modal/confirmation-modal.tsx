import styles from './style.module.css';

type ModalProps = {
	children: React.ReactNode;
	title: string;
	isOpen: boolean;
	onClose?: (type: 'click' | 'esc', target: EventTarget) => void;
	onConfirm?: () => void;
	footer?: {
		hidden?: boolean;
		confirmText?: string;
		cancelText?: string;
	};
};

export const ConfirmationModal: React.FC<ModalProps> = ({ children, title, isOpen, ...props }) => {
	function handleCloseClick(e: React.MouseEvent) {
		const attributeName = e.target.attributes[0]?.name;
		if (attributeName === 'data-modal-close' 
			||  attributeName === 'data-modal-cancel'
			||	e.target.classList.contains(styles.wrapper)
		) {
			props.onClose?.('click', e.target);
		}
	}

    function handleConfirmClick(e: React.MouseEvent) {
		props.onConfirm?.();
	}

	if (!isOpen) return null;

	return (
        <div data-modal-wrapper className={ styles.wrapper } onClick={handleCloseClick}>
			<div data-modal-container>
                <header data-modal-header>
                    <h2>{title}</h2>

                    <button data-modal-close onClick={handleCloseClick}>
                        X
                    </button>
                </header>

                {children}

                {!props.footer?.hidden && (
					<div data-modal-footer>
						<button data-modal-cancel onClick={handleCloseClick}>
							{props.footer?.cancelText ?? 'Cancelar'}
						</button>

						<button data-modal-confirm onClick={handleConfirmClick} data-type="confirm">
							{props.footer?.confirmText ?? 'Confirmar'}
						</button>
					</div>
				)}
            </div>
        </div>
	);
};
