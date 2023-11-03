// Imports
import k from './kaboom';
// Import Scenes
import HelloWorld from './scenes/helloworld';
import kMatterTest from './scenes/kMatterTest';
import Jilian from './scenes/Jillian';

// Add Scenes
k.scene('Hello-World-EX', HelloWorld)
k.scene('kMatter-Test', kMatterTest)
k.scene('Jillian-Test-Scene', Jilian)

// Run Scenes

//k.go('Hello-World-EX'); // This is a template scene

//k.go('kMatter-Test') // This is a physics (matter) template scene

k.go('Jillian-Test-Scene')
