// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectSystemSdnconnectorRoutetableRoute extends pulumi.CustomResource {
    /**
     * Get an existing ObjectSystemSdnconnectorRoutetableRoute resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectSystemSdnconnectorRoutetableRouteState, opts?: pulumi.CustomResourceOptions): ObjectSystemSdnconnectorRoutetableRoute {
        return new ObjectSystemSdnconnectorRoutetableRoute(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectSystemSdnconnectorRoutetableRoute:ObjectSystemSdnconnectorRoutetableRoute';

    /**
     * Returns true if the given object is an instance of ObjectSystemSdnconnectorRoutetableRoute.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectSystemSdnconnectorRoutetableRoute {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectSystemSdnconnectorRoutetableRoute.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly nextHop!: pulumi.Output<string | undefined>;
    public readonly routeTable!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly sdnConnector!: pulumi.Output<string>;

    /**
     * Create a ObjectSystemSdnconnectorRoutetableRoute resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectSystemSdnconnectorRoutetableRouteArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectSystemSdnconnectorRoutetableRouteArgs | ObjectSystemSdnconnectorRoutetableRouteState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectSystemSdnconnectorRoutetableRouteState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nextHop"] = state ? state.nextHop : undefined;
            resourceInputs["routeTable"] = state ? state.routeTable : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["sdnConnector"] = state ? state.sdnConnector : undefined;
        } else {
            const args = argsOrState as ObjectSystemSdnconnectorRoutetableRouteArgs | undefined;
            if ((!args || args.routeTable === undefined) && !opts.urn) {
                throw new Error("Missing required property 'routeTable'");
            }
            if ((!args || args.sdnConnector === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sdnConnector'");
            }
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nextHop"] = args ? args.nextHop : undefined;
            resourceInputs["routeTable"] = args ? args.routeTable : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["sdnConnector"] = args ? args.sdnConnector : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectSystemSdnconnectorRoutetableRoute.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectSystemSdnconnectorRoutetableRoute resources.
 */
export interface ObjectSystemSdnconnectorRoutetableRouteState {
    adom?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nextHop?: pulumi.Input<string>;
    routeTable?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    sdnConnector?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectSystemSdnconnectorRoutetableRoute resource.
 */
export interface ObjectSystemSdnconnectorRoutetableRouteArgs {
    adom?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nextHop?: pulumi.Input<string>;
    routeTable: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    sdnConnector: pulumi.Input<string>;
}
