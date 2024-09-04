// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemIkeDhgroup30 extends pulumi.CustomResource {
    /**
     * Get an existing SystemIkeDhgroup30 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemIkeDhgroup30State, opts?: pulumi.CustomResourceOptions): SystemIkeDhgroup30 {
        return new SystemIkeDhgroup30(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/systemIkeDhgroup30:SystemIkeDhgroup30';

    /**
     * Returns true if the given object is an instance of SystemIkeDhgroup30.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemIkeDhgroup30 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemIkeDhgroup30.__pulumiType;
    }

    public readonly deviceName!: pulumi.Output<string>;
    public readonly fosid!: pulumi.Output<number | undefined>;
    public readonly keypairCache!: pulumi.Output<string>;
    public readonly keypairCount!: pulumi.Output<number | undefined>;
    public readonly mode!: pulumi.Output<string>;

    /**
     * Create a SystemIkeDhgroup30 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemIkeDhgroup30Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemIkeDhgroup30Args | SystemIkeDhgroup30State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemIkeDhgroup30State | undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["keypairCache"] = state ? state.keypairCache : undefined;
            resourceInputs["keypairCount"] = state ? state.keypairCount : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
        } else {
            const args = argsOrState as SystemIkeDhgroup30Args | undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["keypairCache"] = args ? args.keypairCache : undefined;
            resourceInputs["keypairCount"] = args ? args.keypairCount : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemIkeDhgroup30.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemIkeDhgroup30 resources.
 */
export interface SystemIkeDhgroup30State {
    deviceName?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    keypairCache?: pulumi.Input<string>;
    keypairCount?: pulumi.Input<number>;
    mode?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemIkeDhgroup30 resource.
 */
export interface SystemIkeDhgroup30Args {
    deviceName?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    keypairCache?: pulumi.Input<string>;
    keypairCount?: pulumi.Input<number>;
    mode?: pulumi.Input<string>;
}
