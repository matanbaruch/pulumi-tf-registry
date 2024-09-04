// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class RouterRipDistance extends pulumi.CustomResource {
    /**
     * Get an existing RouterRipDistance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RouterRipDistanceState, opts?: pulumi.CustomResourceOptions): RouterRipDistance {
        return new RouterRipDistance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/routerRipDistance:RouterRipDistance';

    /**
     * Returns true if the given object is an instance of RouterRipDistance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RouterRipDistance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RouterRipDistance.__pulumiType;
    }

    public readonly accessLists!: pulumi.Output<string[]>;
    public readonly deviceName!: pulumi.Output<string>;
    public readonly deviceVdom!: pulumi.Output<string>;
    public readonly distance!: pulumi.Output<number | undefined>;
    public readonly fosid!: pulumi.Output<number>;
    public readonly prefixes!: pulumi.Output<string[]>;

    /**
     * Create a RouterRipDistance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: RouterRipDistanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RouterRipDistanceArgs | RouterRipDistanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RouterRipDistanceState | undefined;
            resourceInputs["accessLists"] = state ? state.accessLists : undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["deviceVdom"] = state ? state.deviceVdom : undefined;
            resourceInputs["distance"] = state ? state.distance : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["prefixes"] = state ? state.prefixes : undefined;
        } else {
            const args = argsOrState as RouterRipDistanceArgs | undefined;
            resourceInputs["accessLists"] = args ? args.accessLists : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["deviceVdom"] = args ? args.deviceVdom : undefined;
            resourceInputs["distance"] = args ? args.distance : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["prefixes"] = args ? args.prefixes : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RouterRipDistance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RouterRipDistance resources.
 */
export interface RouterRipDistanceState {
    accessLists?: pulumi.Input<pulumi.Input<string>[]>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    distance?: pulumi.Input<number>;
    fosid?: pulumi.Input<number>;
    prefixes?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a RouterRipDistance resource.
 */
export interface RouterRipDistanceArgs {
    accessLists?: pulumi.Input<pulumi.Input<string>[]>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    distance?: pulumi.Input<number>;
    fosid?: pulumi.Input<number>;
    prefixes?: pulumi.Input<pulumi.Input<string>[]>;
}
