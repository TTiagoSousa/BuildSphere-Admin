import React, { useRef, useEffect } from 'react';
import { Toast } from 'primereact/toast';
import { NavsState } from '../../../Contexts/Navs_Context'; // Ajuste o caminho conforme necessário
import './Global_Alert.scss';

const GlobalAlert = () => {
  const toast = useRef(null);
  const { alert, setAlert } = NavsState();

  useEffect(() => {
    if (alert.open) {
      toast.current.show({
        severity: alert.type,
        summary: alert.type.charAt(0).toUpperCase() + alert.type.slice(1),
        detail: alert.message,
        life: 300000,
      });
      // Reseta o alerta após exibir
      setAlert({ ...alert, open: false });
    }
  }, [alert, setAlert]);

  return <Toast ref={toast} />;
};

export default GlobalAlert;