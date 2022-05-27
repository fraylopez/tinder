# tinder

Caso de uso
Conversación entre un actor externo al sistema y el sistema para obtener un resultado observable de interes

Diagrama de contexto:
Diagrama donde vemos el ciclo de vida de la aplicación y los casos de uso que te permiten cambiar de un estado a otro

Estado:
Dados unos datos, que cosas puedo hacer y que no
Un modelo

TIPOS DE MANTENIMIENTO

Perfectivo (añade o modifica funcionalidad)
Correctivo (arregla funcionalidad)
Adaptativo (compatibilidad)

RUP
Una vista por actor/caso de uso y un controlador por caso de uso

Si esta bn el 80% nos sirve de inspiracion para sacar modelos

STATE MACHINE VS STATE PATTERN

state machine: the object can be in different states, but you don't  care how they behave in those states. We only care about the action performed when the state is transitioned

State pattern: you don't  care about the transition, but how the object behave in those states. The transition is just an implementation details to make your state behaviors decoupled from each other. Each state will be a separate class. For example: state logged_in, will let you do a set of actions while stated blocked will let you do another actions