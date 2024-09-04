// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Lan extends pulumi.CustomResource {
    /**
     * Get an existing Lan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LanState, opts?: pulumi.CustomResourceOptions): Lan {
        return new Lan(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'profitbricks:index/lan:Lan';

    /**
     * Returns true if the given object is an instance of Lan.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Lan {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Lan.__pulumiType;
    }

    public readonly datacenterId!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly pcc!: pulumi.Output<string | undefined>;
    public readonly public!: pulumi.Output<boolean>;
    public readonly timeouts!: pulumi.Output<outputs.LanTimeouts | undefined>;

    /**
     * Create a Lan resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LanArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LanArgs | LanState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LanState | undefined;
            resourceInputs["datacenterId"] = state ? state.datacenterId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["pcc"] = state ? state.pcc : undefined;
            resourceInputs["public"] = state ? state.public : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as LanArgs | undefined;
            if ((!args || args.datacenterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'datacenterId'");
            }
            if ((!args || args.public === undefined) && !opts.urn) {
                throw new Error("Missing required property 'public'");
            }
            resourceInputs["datacenterId"] = args ? args.datacenterId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["pcc"] = args ? args.pcc : undefined;
            resourceInputs["public"] = args ? args.public : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Lan.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Lan resources.
 */
export interface LanState {
    datacenterId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    pcc?: pulumi.Input<string>;
    public?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.LanTimeouts>;
}

/**
 * The set of arguments for constructing a Lan resource.
 */
export interface LanArgs {
    datacenterId: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    pcc?: pulumi.Input<string>;
    public: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.LanTimeouts>;
}
