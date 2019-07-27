let mode_choice = ["none", "multi", "single"];
let mode = "";

let game = (mode) => {

    swith (mode) {
        case 'none':
            mode_none();
            break;
        case 'multi':
            mode_multi();
            break;
        case 'single': 
            mode_single();
            break;
        default:
            return null;    
    }
}

function mode_none(questions) {

}

function mode_multi(questions) {

}

function mode_single(questions) {

}