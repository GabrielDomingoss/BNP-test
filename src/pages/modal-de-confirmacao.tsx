/**
 * Modal de confirmação
 *
 * - Crie um component para o modal de confirmação
 * - Utilize o código abaixo como base
 * - O modal deve ser aberto ao clicar no botão "Abrir modal de confirmação"
 * - O título deve ser "Confirmação"
 * - O conteudo deve ser dinâmico
 */

import { useState } from 'react';
import Head from 'next/head';

import styles from '@/styles/modal.module.css';
import { Modal } from '@/components/Modal';
import { ConfirmationModal } from '@/components/Modal/confirmation-modal';

export default function Home() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [modalContent, setModalContent] = useState("Conteudo inicial");

	function handleModalConfirm() {
		setModalIsOpen(false);
		alert('confirmado');
	}

	function handleModalClose() {
		setModalIsOpen(false);
	}
	
	const handleOpenModal = () => {
		setModalContent("Conteudo gerado dinamicamente!");
		setModalIsOpen(true);
	};

	return (
		<>
			<main className={styles.container}>
				<button type="button" onClick={handleOpenModal}>
					Abrir modal de confirmação
				</button>
			</main>

			{/* Renderizar modal de confirmação */}

			<ConfirmationModal 
				isOpen={modalIsOpen} 
				onClose={handleModalClose}
				onConfirm={handleModalConfirm}
				title='Confirmação'
			>
				<div data-modal-content>
					<Head>
						<title>Confirmação</title>
						<meta property="og:title" content="Confirmação" key="title" />
					</Head>
					<p>{modalContent}</p>
				</div>
			</ConfirmationModal>
		</>
	);
}
