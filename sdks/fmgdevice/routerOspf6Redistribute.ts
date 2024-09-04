// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class RouterOspf6Redistribute extends pulumi.CustomResource {
    /**
     * Get an existing RouterOspf6Redistribute resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RouterOspf6RedistributeState, opts?: pulumi.CustomResourceOptions): RouterOspf6Redistribute {
        return new RouterOspf6Redistribute(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/routerOspf6Redistribute:RouterOspf6Redistribute';

    /**
     * Returns true if the given object is an instance of RouterOspf6Redistribute.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RouterOspf6Redistribute {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RouterOspf6Redistribute.__pulumiType;
    }

    public readonly deviceName!: pulumi.Output<string>;
    public readonly deviceVdom!: pulumi.Output<string>;
    public readonly metric!: pulumi.Output<number | undefined>;
    public readonly metricType!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly routemaps!: pulumi.Output<string[]>;
    public readonly status!: pulumi.Output<string>;

    /**
     * Create a RouterOspf6Redistribute resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: RouterOspf6RedistributeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RouterOspf6RedistributeArgs | RouterOspf6RedistributeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RouterOspf6RedistributeState | undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["deviceVdom"] = state ? state.deviceVdom : undefined;
            resourceInputs["metric"] = state ? state.metric : undefined;
            resourceInputs["metricType"] = state ? state.metricType : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["routemaps"] = state ? state.routemaps : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
        } else {
            const args = argsOrState as RouterOspf6RedistributeArgs | undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["deviceVdom"] = args ? args.deviceVdom : undefined;
            resourceInputs["metric"] = args ? args.metric : undefined;
            resourceInputs["metricType"] = args ? args.metricType : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["routemaps"] = args ? args.routemaps : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RouterOspf6Redistribute.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RouterOspf6Redistribute resources.
 */
export interface RouterOspf6RedistributeState {
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    metric?: pulumi.Input<number>;
    metricType?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    routemaps?: pulumi.Input<pulumi.Input<string>[]>;
    status?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RouterOspf6Redistribute resource.
 */
export interface RouterOspf6RedistributeArgs {
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    metric?: pulumi.Input<number>;
    metricType?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    routemaps?: pulumi.Input<pulumi.Input<string>[]>;
    status?: pulumi.Input<string>;
}
