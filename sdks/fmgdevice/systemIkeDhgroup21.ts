// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemIkeDhgroup21 extends pulumi.CustomResource {
    /**
     * Get an existing SystemIkeDhgroup21 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemIkeDhgroup21State, opts?: pulumi.CustomResourceOptions): SystemIkeDhgroup21 {
        return new SystemIkeDhgroup21(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/systemIkeDhgroup21:SystemIkeDhgroup21';

    /**
     * Returns true if the given object is an instance of SystemIkeDhgroup21.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemIkeDhgroup21 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemIkeDhgroup21.__pulumiType;
    }

    public readonly deviceName!: pulumi.Output<string>;
    public readonly fosid!: pulumi.Output<number | undefined>;
    public readonly keypairCache!: pulumi.Output<string>;
    public readonly keypairCount!: pulumi.Output<number | undefined>;
    public readonly mode!: pulumi.Output<string>;

    /**
     * Create a SystemIkeDhgroup21 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemIkeDhgroup21Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemIkeDhgroup21Args | SystemIkeDhgroup21State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemIkeDhgroup21State | undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["keypairCache"] = state ? state.keypairCache : undefined;
            resourceInputs["keypairCount"] = state ? state.keypairCount : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
        } else {
            const args = argsOrState as SystemIkeDhgroup21Args | undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["keypairCache"] = args ? args.keypairCache : undefined;
            resourceInputs["keypairCount"] = args ? args.keypairCount : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemIkeDhgroup21.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemIkeDhgroup21 resources.
 */
export interface SystemIkeDhgroup21State {
    deviceName?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    keypairCache?: pulumi.Input<string>;
    keypairCount?: pulumi.Input<number>;
    mode?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemIkeDhgroup21 resource.
 */
export interface SystemIkeDhgroup21Args {
    deviceName?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    keypairCache?: pulumi.Input<string>;
    keypairCount?: pulumi.Input<number>;
    mode?: pulumi.Input<string>;
}
