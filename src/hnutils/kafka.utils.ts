import { Kafka, ProducerRecord } from 'kafkajs';
import { HttpStatus } from '@nestjs/common';
import { CustomException } from '../errorhandler/custom.exception';
export class KafkaUtils {

 

  static async sendKafkaMessage(
    topicServer: string,
    topicName: string,
    topicClientId: string,
    topicMessage: string,
    uti: string,
    groupId?: string,
  ): Promise<any> {
    let kafka: Kafka | undefined;
    // Configuración del cliente Kafka
    kafka = new Kafka({
      clientId: topicClientId,
      brokers: [topicServer],
    });

    // Crear un productor Kafka
    const producer = kafka.producer();
    // Función asincrónica para enviar un mensaje
    let connect = false;
    try {
      // Conectar al broker Kafka
      await producer.connect();
      connect = true;
      // Enviar un mensaje al tópico 'mi-topico'
      
      let producerRecord: ProducerRecord = 
      {
        topic: topicName,
        messages: [{ value: topicMessage, key: uti }],
      };

      await producer.send(producerRecord);
    } catch (error) {
      throw new CustomException(
        error,
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    } finally {
      // Cerrar el productor Kafka
      if (connect) {
        producer.disconnect();
      }
    }
  }
}
