import sys
import threading


class SingletonMixin:
    __lock = threading.Lock()
    __instance = None

    def __init__(self):
        if self.__class__.__instance:
            raise Exception('Tried to allocate a second instance of a singleton.\nUse getInstance() instead.')
            sys.exit(-1)

    @classmethod
    def get_instance(cls):
        if cls.__instance is None:
            with cls.__lock:
                if cls.__instance is None:
                    cls.__instance = cls()
        return cls.__instance