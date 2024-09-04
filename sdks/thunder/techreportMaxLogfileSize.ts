// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class TechreportMaxLogfileSize extends pulumi.CustomResource {
    /**
     * Get an existing TechreportMaxLogfileSize resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TechreportMaxLogfileSizeState, opts?: pulumi.CustomResourceOptions): TechreportMaxLogfileSize {
        return new TechreportMaxLogfileSize(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/techreportMaxLogfileSize:TechreportMaxLogfileSize';

    /**
     * Returns true if the given object is an instance of TechreportMaxLogfileSize.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TechreportMaxLogfileSize {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TechreportMaxLogfileSize.__pulumiType;
    }

    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;
    /**
     * Log file size for periodic techsupport (default is 1)
     */
    public readonly value!: pulumi.Output<number | undefined>;

    /**
     * Create a TechreportMaxLogfileSize resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: TechreportMaxLogfileSizeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TechreportMaxLogfileSizeArgs | TechreportMaxLogfileSizeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TechreportMaxLogfileSizeState | undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["value"] = state ? state.value : undefined;
        } else {
            const args = argsOrState as TechreportMaxLogfileSizeArgs | undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["value"] = args ? args.value : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TechreportMaxLogfileSize.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TechreportMaxLogfileSize resources.
 */
export interface TechreportMaxLogfileSizeState {
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * Log file size for periodic techsupport (default is 1)
     */
    value?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a TechreportMaxLogfileSize resource.
 */
export interface TechreportMaxLogfileSizeArgs {
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * Log file size for periodic techsupport (default is 1)
     */
    value?: pulumi.Input<number>;
}
