// Imports
import k from './kaboom';
// Import Scenes
import HelloWorld from './scenes/helloworld';
import kMatterTest from './scenes/kMatterTest';

// Add Scenes
k.scene('Hello-World-EX', HelloWorld)
k.scene('kMatter-Test', kMatterTest)

// Run Scenes

//k.go('Hello-World-EX'); // This is a template scene

k.go('kMatter-Test') // This is a physics (matter) template scene
