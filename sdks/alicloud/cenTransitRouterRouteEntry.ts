// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CenTransitRouterRouteEntry extends pulumi.CustomResource {
    /**
     * Get an existing CenTransitRouterRouteEntry resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CenTransitRouterRouteEntryState, opts?: pulumi.CustomResourceOptions): CenTransitRouterRouteEntry {
        return new CenTransitRouterRouteEntry(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/cenTransitRouterRouteEntry:CenTransitRouterRouteEntry';

    /**
     * Returns true if the given object is an instance of CenTransitRouterRouteEntry.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CenTransitRouterRouteEntry {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CenTransitRouterRouteEntry.__pulumiType;
    }

    public readonly dryRun!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.CenTransitRouterRouteEntryTimeouts | undefined>;
    public readonly transitRouterRouteEntryDescription!: pulumi.Output<string | undefined>;
    public readonly transitRouterRouteEntryDestinationCidrBlock!: pulumi.Output<string>;
    public /*out*/ readonly transitRouterRouteEntryId!: pulumi.Output<string>;
    public readonly transitRouterRouteEntryName!: pulumi.Output<string | undefined>;
    public readonly transitRouterRouteEntryNextHopId!: pulumi.Output<string | undefined>;
    public readonly transitRouterRouteEntryNextHopType!: pulumi.Output<string>;
    public readonly transitRouterRouteTableId!: pulumi.Output<string>;

    /**
     * Create a CenTransitRouterRouteEntry resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CenTransitRouterRouteEntryArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CenTransitRouterRouteEntryArgs | CenTransitRouterRouteEntryState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CenTransitRouterRouteEntryState | undefined;
            resourceInputs["dryRun"] = state ? state.dryRun : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["transitRouterRouteEntryDescription"] = state ? state.transitRouterRouteEntryDescription : undefined;
            resourceInputs["transitRouterRouteEntryDestinationCidrBlock"] = state ? state.transitRouterRouteEntryDestinationCidrBlock : undefined;
            resourceInputs["transitRouterRouteEntryId"] = state ? state.transitRouterRouteEntryId : undefined;
            resourceInputs["transitRouterRouteEntryName"] = state ? state.transitRouterRouteEntryName : undefined;
            resourceInputs["transitRouterRouteEntryNextHopId"] = state ? state.transitRouterRouteEntryNextHopId : undefined;
            resourceInputs["transitRouterRouteEntryNextHopType"] = state ? state.transitRouterRouteEntryNextHopType : undefined;
            resourceInputs["transitRouterRouteTableId"] = state ? state.transitRouterRouteTableId : undefined;
        } else {
            const args = argsOrState as CenTransitRouterRouteEntryArgs | undefined;
            if ((!args || args.transitRouterRouteEntryDestinationCidrBlock === undefined) && !opts.urn) {
                throw new Error("Missing required property 'transitRouterRouteEntryDestinationCidrBlock'");
            }
            if ((!args || args.transitRouterRouteEntryNextHopType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'transitRouterRouteEntryNextHopType'");
            }
            if ((!args || args.transitRouterRouteTableId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'transitRouterRouteTableId'");
            }
            resourceInputs["dryRun"] = args ? args.dryRun : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["transitRouterRouteEntryDescription"] = args ? args.transitRouterRouteEntryDescription : undefined;
            resourceInputs["transitRouterRouteEntryDestinationCidrBlock"] = args ? args.transitRouterRouteEntryDestinationCidrBlock : undefined;
            resourceInputs["transitRouterRouteEntryName"] = args ? args.transitRouterRouteEntryName : undefined;
            resourceInputs["transitRouterRouteEntryNextHopId"] = args ? args.transitRouterRouteEntryNextHopId : undefined;
            resourceInputs["transitRouterRouteEntryNextHopType"] = args ? args.transitRouterRouteEntryNextHopType : undefined;
            resourceInputs["transitRouterRouteTableId"] = args ? args.transitRouterRouteTableId : undefined;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["transitRouterRouteEntryId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CenTransitRouterRouteEntry.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CenTransitRouterRouteEntry resources.
 */
export interface CenTransitRouterRouteEntryState {
    dryRun?: pulumi.Input<boolean>;
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CenTransitRouterRouteEntryTimeouts>;
    transitRouterRouteEntryDescription?: pulumi.Input<string>;
    transitRouterRouteEntryDestinationCidrBlock?: pulumi.Input<string>;
    transitRouterRouteEntryId?: pulumi.Input<string>;
    transitRouterRouteEntryName?: pulumi.Input<string>;
    transitRouterRouteEntryNextHopId?: pulumi.Input<string>;
    transitRouterRouteEntryNextHopType?: pulumi.Input<string>;
    transitRouterRouteTableId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CenTransitRouterRouteEntry resource.
 */
export interface CenTransitRouterRouteEntryArgs {
    dryRun?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.CenTransitRouterRouteEntryTimeouts>;
    transitRouterRouteEntryDescription?: pulumi.Input<string>;
    transitRouterRouteEntryDestinationCidrBlock: pulumi.Input<string>;
    transitRouterRouteEntryName?: pulumi.Input<string>;
    transitRouterRouteEntryNextHopId?: pulumi.Input<string>;
    transitRouterRouteEntryNextHopType: pulumi.Input<string>;
    transitRouterRouteTableId: pulumi.Input<string>;
}
