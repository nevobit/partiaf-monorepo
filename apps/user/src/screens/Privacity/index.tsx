import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa el hook de navegación
import colors from '../../components/Layout/Theme/colors';

const Privacity = () => {
  const navigation = useNavigation(); // Hook de navegación

  const handleGoBack = () => {
    navigation.goBack(); // Regresar a la pantalla anterior
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.title}>Política de Tratamiento de Datos - Partiaf</Text>
    <Text style={styles.text}>Fecha de entrada en vigor: </Text>
    
    <Text style={styles.text}>
      Agradecemos tu confianza en Partiaf. Esta política de tratamiento de datos personales explica cómo recopilamos, utilizamos y protegemos la información personal que nos proporcionas a través de la aplicación Partiaf. Al utilizar nuestra aplicación, aceptas los términos de esta política.
    </Text>

    <Text style={styles.title}>1. Información que Recopilamos</Text>
    <Text style={styles.text}>
      Recopilamos y almacenamos información personal que tú proporcionas voluntariamente, como tu nombre, dirección de correo electrónico, número de teléfono, fecha de nacimiento, género y preferencias de eventos. También podemos recopilar información sobre tus interacciones con la aplicación, como las páginas que visitas y las acciones que realizas.
    </Text>

    <Text style={styles.title}>2. Uso de la Información</Text>
    <Text style={styles.text}>
      Utilizamos la información personal que recopilamos para los siguientes fines:
      - Facilitar tu participación en eventos y actividades.
      - Enviarte notificaciones relacionadas con eventos y actualizaciones de la aplicación.
      - Mejorar nuestros servicios y personalizar tu experiencia en Partiaf.
      - Cumplir con obligaciones legales y regulatorias.
    </Text>

    <Text style={styles.title}>3. Compartir Información</Text>
    <Text style={styles.text}>
      No compartiremos tu información personal con terceros sin tu consentimiento, excepto en las siguientes situaciones:
      - Cuando sea necesario para llevar a cabo un evento o actividad en la que te hayas inscrito.
      - Con proveedores de servicios de confianza que ayudan a operar y mejorar la aplicación.
      - Cuando estemos legalmente obligados a hacerlo, como en respuesta a una orden judicial o para cumplir con las leyes aplicables.
    </Text>

    <Text style={styles.title}>4. Seguridad de Datos</Text>
    <Text style={styles.text}>
      Tomamos medidas razonables para proteger tu información personal contra el acceso no autorizado, la alteración, la divulgación o la destrucción. Sin embargo, ten en cuenta que ninguna transmisión de datos por Internet es 100% segura.
    </Text>

    <Text style={styles.title}>5. Tus Derechos</Text>
    <Text style={styles.text}>
      Tienes derecho a acceder, corregir, actualizar o eliminar tus datos personales. También puedes oponerte al tratamiento de tus datos personales para fines de marketing. Para ejercer estos derechos, ponte en contacto con nosotros a través de [correo electrónico de contacto].
    </Text>

    <Text style={styles.title}>6. Cambios en la Política de Privacidad</Text>
    <Text style={styles.text}>
      Esta política de tratamiento de datos personales está sujeta a cambios. Cualquier modificación se publicará en esta página y, si son significativas, te notificaremos de manera destacada o mediante notificación en la aplicación.
    </Text>

    <Text style={styles.text}>
      Si tienes alguna pregunta sobre esta política o sobre la forma en que tratamos tus datos personales, no dudes en ponerte en contacto con nosotros a través de [correo electrónico de contacto].
    </Text>

    <Text style={styles.text}>
      Agradecemos tu confianza en Partiaf y esperamos que disfrutes de la experiencia en nuestra aplicación.
    </Text>

    <Text style={styles.text}>Fecha de la última actualización: </Text>
    <TouchableOpacity onPress={handleGoBack} style={styles.goBackButton}>
        <Text style={styles.buttonText}>Atrás</Text>
      </TouchableOpacity>
  </ScrollView>
);
};

const styles = StyleSheet.create({
container: {
  padding: 20,
  backgroundColor: '#000',
  paddingTop: 50
},
title: {
  color: "#fff",
  fontSize: 20,
  fontWeight: 'bold',
},
text: {
  fontSize: 14,
  marginTop: 10,
  color: '#fff',
  marginBottom: 10
},
goBackButton: {
  backgroundColor: colors.dark.primary,
  borderRadius: 5,
  padding: 10,
  alignItems: 'center',
  marginTop: 20,
},
buttonText: {
  color: 'rgba(0,0,0,0.8)',
  fontSize: 18,
},
});



export default Privacity