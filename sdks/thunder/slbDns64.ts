// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SlbDns64 extends pulumi.CustomResource {
    /**
     * Get an existing SlbDns64 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SlbDns64State, opts?: pulumi.CustomResourceOptions): SlbDns64 {
        return new SlbDns64(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/slbDns64:SlbDns64';

    /**
     * Returns true if the given object is an instance of SlbDns64.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SlbDns64 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SlbDns64.__pulumiType;
    }

    public readonly samplingEnables!: pulumi.Output<outputs.SlbDns64SamplingEnable[] | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a SlbDns64 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SlbDns64Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SlbDns64Args | SlbDns64State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SlbDns64State | undefined;
            resourceInputs["samplingEnables"] = state ? state.samplingEnables : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as SlbDns64Args | undefined;
            resourceInputs["samplingEnables"] = args ? args.samplingEnables : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SlbDns64.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SlbDns64 resources.
 */
export interface SlbDns64State {
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.SlbDns64SamplingEnable>[]>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SlbDns64 resource.
 */
export interface SlbDns64Args {
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.SlbDns64SamplingEnable>[]>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
