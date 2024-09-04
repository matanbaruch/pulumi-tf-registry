// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Ipsecprofile extends pulumi.CustomResource {
    /**
     * Get an existing Ipsecprofile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpsecprofileState, opts?: pulumi.CustomResourceOptions): Ipsecprofile {
        return new Ipsecprofile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/ipsecprofile:Ipsecprofile';

    /**
     * Returns true if the given object is an instance of Ipsecprofile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Ipsecprofile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Ipsecprofile.__pulumiType;
    }

    public readonly encalgos!: pulumi.Output<string[]>;
    public readonly hashalgos!: pulumi.Output<string[]>;
    public readonly ikeretryinterval!: pulumi.Output<number>;
    public readonly ikeversion!: pulumi.Output<string>;
    public readonly lifetime!: pulumi.Output<number>;
    public readonly livenesscheckinterval!: pulumi.Output<number>;
    public readonly name!: pulumi.Output<string>;
    public readonly peerpublickey!: pulumi.Output<string>;
    public readonly perfectforwardsecrecy!: pulumi.Output<string>;
    public readonly privatekey!: pulumi.Output<string>;
    public readonly psk!: pulumi.Output<string>;
    public readonly publickey!: pulumi.Output<string>;
    public readonly replaywindowsize!: pulumi.Output<number>;
    public readonly retransmissiontime!: pulumi.Output<number>;

    /**
     * Create a Ipsecprofile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IpsecprofileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IpsecprofileArgs | IpsecprofileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IpsecprofileState | undefined;
            resourceInputs["encalgos"] = state ? state.encalgos : undefined;
            resourceInputs["hashalgos"] = state ? state.hashalgos : undefined;
            resourceInputs["ikeretryinterval"] = state ? state.ikeretryinterval : undefined;
            resourceInputs["ikeversion"] = state ? state.ikeversion : undefined;
            resourceInputs["lifetime"] = state ? state.lifetime : undefined;
            resourceInputs["livenesscheckinterval"] = state ? state.livenesscheckinterval : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["peerpublickey"] = state ? state.peerpublickey : undefined;
            resourceInputs["perfectforwardsecrecy"] = state ? state.perfectforwardsecrecy : undefined;
            resourceInputs["privatekey"] = state ? state.privatekey : undefined;
            resourceInputs["psk"] = state ? state.psk : undefined;
            resourceInputs["publickey"] = state ? state.publickey : undefined;
            resourceInputs["replaywindowsize"] = state ? state.replaywindowsize : undefined;
            resourceInputs["retransmissiontime"] = state ? state.retransmissiontime : undefined;
        } else {
            const args = argsOrState as IpsecprofileArgs | undefined;
            resourceInputs["encalgos"] = args ? args.encalgos : undefined;
            resourceInputs["hashalgos"] = args ? args.hashalgos : undefined;
            resourceInputs["ikeretryinterval"] = args ? args.ikeretryinterval : undefined;
            resourceInputs["ikeversion"] = args ? args.ikeversion : undefined;
            resourceInputs["lifetime"] = args ? args.lifetime : undefined;
            resourceInputs["livenesscheckinterval"] = args ? args.livenesscheckinterval : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["peerpublickey"] = args ? args.peerpublickey : undefined;
            resourceInputs["perfectforwardsecrecy"] = args ? args.perfectforwardsecrecy : undefined;
            resourceInputs["privatekey"] = args ? args.privatekey : undefined;
            resourceInputs["psk"] = args ? args.psk : undefined;
            resourceInputs["publickey"] = args ? args.publickey : undefined;
            resourceInputs["replaywindowsize"] = args ? args.replaywindowsize : undefined;
            resourceInputs["retransmissiontime"] = args ? args.retransmissiontime : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Ipsecprofile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Ipsecprofile resources.
 */
export interface IpsecprofileState {
    encalgos?: pulumi.Input<pulumi.Input<string>[]>;
    hashalgos?: pulumi.Input<pulumi.Input<string>[]>;
    ikeretryinterval?: pulumi.Input<number>;
    ikeversion?: pulumi.Input<string>;
    lifetime?: pulumi.Input<number>;
    livenesscheckinterval?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    peerpublickey?: pulumi.Input<string>;
    perfectforwardsecrecy?: pulumi.Input<string>;
    privatekey?: pulumi.Input<string>;
    psk?: pulumi.Input<string>;
    publickey?: pulumi.Input<string>;
    replaywindowsize?: pulumi.Input<number>;
    retransmissiontime?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Ipsecprofile resource.
 */
export interface IpsecprofileArgs {
    encalgos?: pulumi.Input<pulumi.Input<string>[]>;
    hashalgos?: pulumi.Input<pulumi.Input<string>[]>;
    ikeretryinterval?: pulumi.Input<number>;
    ikeversion?: pulumi.Input<string>;
    lifetime?: pulumi.Input<number>;
    livenesscheckinterval?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    peerpublickey?: pulumi.Input<string>;
    perfectforwardsecrecy?: pulumi.Input<string>;
    privatekey?: pulumi.Input<string>;
    psk?: pulumi.Input<string>;
    publickey?: pulumi.Input<string>;
    replaywindowsize?: pulumi.Input<number>;
    retransmissiontime?: pulumi.Input<number>;
}
