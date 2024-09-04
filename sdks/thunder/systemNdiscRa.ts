// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SystemNdiscRa extends pulumi.CustomResource {
    /**
     * Get an existing SystemNdiscRa resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemNdiscRaState, opts?: pulumi.CustomResourceOptions): SystemNdiscRa {
        return new SystemNdiscRa(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/systemNdiscRa:SystemNdiscRa';

    /**
     * Returns true if the given object is an instance of SystemNdiscRa.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemNdiscRa {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemNdiscRa.__pulumiType;
    }

    public readonly samplingEnables!: pulumi.Output<outputs.SystemNdiscRaSamplingEnable[] | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a SystemNdiscRa resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemNdiscRaArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemNdiscRaArgs | SystemNdiscRaState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemNdiscRaState | undefined;
            resourceInputs["samplingEnables"] = state ? state.samplingEnables : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as SystemNdiscRaArgs | undefined;
            resourceInputs["samplingEnables"] = args ? args.samplingEnables : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemNdiscRa.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemNdiscRa resources.
 */
export interface SystemNdiscRaState {
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.SystemNdiscRaSamplingEnable>[]>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemNdiscRa resource.
 */
export interface SystemNdiscRaArgs {
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.SystemNdiscRaSamplingEnable>[]>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
