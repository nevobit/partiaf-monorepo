import { Layout } from '@/components'
import Counter from '@/components/Counter';
import React, { useEffect, useState } from 'react'
import styles from "./Soon.module.css"
import Image from 'next/image';
import Link from 'next/link';
import FormularioModal from '@/components/Modal';

const SoonoroFest = () => {
  const [diferenciaEnDias, setDiferenciaEnDias] = useState<number | null>(null);

  useEffect(() => {
    // Obtén la fecha de hoy
    const hoy = new Date();

    // Establece la fecha objetivo (16 de diciembre del mismo año)
    const fechaObjetivo = new Date(hoy.getFullYear(), 11, 16); // El mes está indexado desde 0 (0-11)

    // Calcula la diferencia en milisegundos
    const diferenciaEnMilisegundos = fechaObjetivo.getTime() - hoy.getTime();

    // Calcula la diferencia en días
    const diferenciaEnDias = Math.ceil(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));

    // Actualiza el estado
    setDiferenciaEnDias(diferenciaEnDias);
  }, []);

  const [deviceType, setDeviceType] = useState<string>('');

  useEffect(() => {
    const userAgent = navigator.userAgent;

    // Verificar si el agente del usuario indica que es un iPhone
    if (/iPhone/i.test(userAgent)) {
      setDeviceType('iPhone');
    }
    // Verificar si el agente del usuario indica que es un dispositivo Android
    else if (/Android/i.test(userAgent)) {
      setDeviceType('Android');
    }
    // Si no es iPhone ni Android, se podría asumir que es otro tipo de dispositivo
    else {
      setDeviceType('Otro dispositivo');
    }
  }, []);

  console.log(deviceType)
  return (
    <Layout title='Soonoro Fest'>
      <div className={styles.container}>
        <Image className={styles.image} src="/event.png" width={5020} height={5020} alt='Evento' />

        {/* <p>Preparate por que se viene el evento de fin de año <strong>SOONORO FEST</strong> donde la playa, el atardecer, la música y la buena vibra nos espera</p> */}
        {/* <h2>Sabase 16 SEPTIEMBRE SANTA MARTA</h2> */}
        <Counter />
        <div className={styles.info}>


          <div
            style={{
              backgroundColor: "rgba(255,255,255,1)",

              height: "100%",
            }}
          >
            <div
              style={{
                position: "relative",
                bottom: 45,
                // height: '100%',
                borderRadius: 30,
                backgroundColor: "rgba(255,255,255,1)",
                padding: 20,
                paddingTop: 20,
                paddingBottom: 0,
              }}
            >
              <p
                style={{
                  color: "#000",
                  fontWeight: "600",
                  fontSize: 20,
                  marginTop: 10,
                  textAlign: "left"
                }}
              >
                Soonoro Fest
              </p>
              <p
                style={{
                  color: "#000",
                  fontWeight: "500",
                  fontSize: 16,
                  textAlign: "left"
                }}
              >
                Santa Marta, Colombia
              </p>
              <p
                style={{
                  color: "rgba(0,0,0,0.5)",
                  fontWeight: "400",
                  fontSize: 16,
                  textAlign: "left"
                }}
              >
                Evento
              </p>

              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                  gap: 10,
                  marginTop: 10,
                }}
              >
                <p
                  style={{
                    color: "#000",
                    borderWidth: 1,
                    borderColor: "#FFE243",
                    border: "1px solid #333",
                    paddingInline: 10,
                    paddingBlock: 10,
                    borderRadius: 10,
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  18+
                </p>
                <p
                  style={{
                    color: "#000",
                    borderWidth: 1,
                    border: "1px solid #333",
                    paddingBlock: 2,
                    fontSize: "14px",
                    paddingInline: 10,
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Amigos
                </p>
                <p
                  style={{
                    color: "#000",
                    borderWidth: 1,
                    border: "1px solid #333",
                    paddingBlock: 2,
                    fontSize: "14px",
                    paddingInline: 10,
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Playa
                </p>
                <p
                  style={{
                    color: "#000",
                    borderWidth: 1,
                    border: "1px solid #333",
                    paddingBlock: 2,
                    fontSize: "14px",
                    paddingInline: 10,
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Festival
                </p>
                <p
                  style={{
                    color: "#000",
                    borderWidth: 1,
                    border: "1px solid #333",
                    paddingBlock: 2,
                    paddingInline: 10,
                    fontSize: "14px",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Crossover
                </p>
              </div>
            </div>

            <div
              style={{
                paddingInline: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                backgroundColor: "rgba(255,255,255,1)",
              }}
            >
              <button
                style={{
                  backgroundColor: "rgba(0, 0, 0, .1)",
                  borderRadius: 10,
                  paddingInline: 30,
                  paddingBlock: 10,
                  alignItems: "center",
                  border: "none",
                  marginBlock: 10
                }}
              >
                <Image src="/barcode-outline.svg" width={30} height={30} alt='Icono' style={{
                  filter: "invert(0)"
                }} color='#fff' />
                {/* <Icon name="barcode-outline" color="#fff" size={30} /> */}
                <p
                  style={{
                    color: "#000",
                  }}
                >
                  Tickets
                </p>
              </button>
              {/* <DefaultView
            style={{
              alignItems: 'center',
            }}>
            <Icon name="fast-food-outline" color="#fff" size={30} />
            <Text
              style={{
                color: '#fff',
              }}>
              Menu
            </Text>
          </DefaultView> */}
            </div>
            {/* <DefaultView
          style={{
            borderWidth: 1,
            borderColor: 'rgba(255,255,255, .1)',
            paddingHorizontal: 20,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            paddingVertical: 15,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}>
          <Image
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
            }}
            source={{
              uri: 'https://i.ibb.co/Q8BQGxC/photo-1615109398623-88346a601842.jpg',
            }}
          />
          <DefaultView>
            <Text
              style={{
                color: '#fff',
                fontWeight: '500',
              }}>
              Alessandro de Bonis
            </Text>
            <Text
              style={{
                color: 'rgba(255,255,255,.8)',
              }}>
              Organizador
            </Text>
          </DefaultView>
        </DefaultView> */}
            <div
              style={{
                height: 140,
                paddingInline: 20,
                paddingBlock: 10,
              }}
            >

              <div>
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: 18,
                    color: "#000",
                    marginBottom: 20,
                    textAlign: "left",
                    marginTop: 10,
                  }}
                >
                  Sobre el evento
                </p>
                <p
                  style={{
                    color: "rgba(0,0,0,.6)",
                    fontSize: 16,
                    textAlign: 'left'
                  }}
                >
                  Hola👋🏻
                  📢Esto es un llamado para toda la Costa Colombiana!

                  Prepárense por que se viene el evento de fin de año🎇 SOONORO FEST🌞 donde la playa, el atardecer, la música y la buena vibra nos espera⚡️

                  Save the date: SAB 16 DIC🔥

                  ¡Síguenos en Instagram! para que estes al tanto de todo🙌🏻 
                  
                
                  <br />
                  <br />
                  Porque no hay mejor lugar en Santa Marta para parcharse el Soonoro Fest que en📍@playaca_beach ¡Nos vamos pa taganga! 🏝️🌅

                </p>
                <div style={{
                  display: 'flex',
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10
                }}>

                <Link   style={{
                  backgroundColor: "rgba(0, 0, 0, .1)",
                  borderRadius: 10,
                  paddingInline: 30,
                  paddingBlock: 10,
                  alignItems: "center",
                  border: "none",
                  marginBlock: 10
                }}
                href="https://instagram.com/soonorofest?igshid=a2tsY2FwbW92ZXFv&utm_source=qr"
                >
                <Image src="/logo-instagram.svg" width={30} height={30} alt='Icono' style={{
                  filter: "invert(0)"
                }} color='#fff' />
                <p style={{
                  fontSize: "14px",
                  color: "#333"
                }} >Instagram</p>
                </Link>

                <Link   style={{
                  backgroundColor: "rgba(0, 0, 0, .1)",
                  borderRadius: 10,
                  paddingInline: 30,
                  paddingBlock: 10,
                  alignItems: "center",
                  border: "none",
                  marginBlock: 10
                }}
                href="https://instagram.com/soonorofest?igshid=a2tsY2FwbW92ZXFv&utm_source=qr"
                >
                <Image src="/logo-whatsapp.svg" width={30} height={30} alt='Icono' style={{
                  filter: "invert(0)"
                }} color='#fff' />
                <p style={{
                  fontSize: "14px",
                  color: "#333"
                }} >Whatsapp</p>
                </Link>
                <button   style={{
                  backgroundColor: "rgba(0, 0, 0, .1)",
                  borderRadius: 10,
                  paddingInline: 30,
                  paddingBlock: 10,
                  alignItems: "center",
                  border: "none",
                  marginBlock: 10
                }}>
                <Image src="/location-outline.svg" width={30} height={30} alt='Icono' style={{
                  filter: "invert(0)"
                }} color='#fff' />
                <p style={{
                  fontSize: "14px"
                }}>Ubicación</p>
                </button>
                </div>

              </div>

              <div>

              </div>

              {/* <Text
            style={{
              fontWeight: '500',
              fontSize: 18,
              color: '#fff',
            }}>
            Ubicacion
          </Text> */}
              {/* <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      /> */}
            </div>
          </div>
        </div>
        {/* <FormularioModal />
        <p className={styles.copy}>O descarga Partiaf y obtén beneficios</p>

        {deviceType == "iPhone" && (

        <Link href='https://apps.apple.com/co/app/partiaf/id6450636147?l=en-GB'>
              <Image
                src="/app-store-logo.png"
                width={150}
                height={40}
                alt="App Store logo"
              />
            </Link>
        )}
        {deviceType == "Android" && (
          <Link href='https://play.google.com/store/apps/details?id=com.nevobit.partiaf'>

              <Image
                src="/playstore-logo.png"
                width={150}
                height={30}
                alt="App Store logo"
              />
          </Link>
        )} */}

      </div>



    </Layout>
  )
}

export default SoonoroFest