;; before (cursor at |)
|(foo baz) ; bar

;; initial state (cursor at |)
(foo |quux) ; bar

;; "gcc"
(foo  ; bar
 |) ;; quux

;; "kJ"
(foo) ; bar| quux

m5 10*xx 
