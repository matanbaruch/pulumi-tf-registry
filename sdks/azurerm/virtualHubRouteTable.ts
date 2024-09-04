// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class VirtualHubRouteTable extends pulumi.CustomResource {
    /**
     * Get an existing VirtualHubRouteTable resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VirtualHubRouteTableState, opts?: pulumi.CustomResourceOptions): VirtualHubRouteTable {
        return new VirtualHubRouteTable(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/virtualHubRouteTable:VirtualHubRouteTable';

    /**
     * Returns true if the given object is an instance of VirtualHubRouteTable.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualHubRouteTable {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualHubRouteTable.__pulumiType;
    }

    public readonly labels!: pulumi.Output<string[] | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly routes!: pulumi.Output<outputs.VirtualHubRouteTableRoute[] | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.VirtualHubRouteTableTimeouts | undefined>;
    public readonly virtualHubId!: pulumi.Output<string>;

    /**
     * Create a VirtualHubRouteTable resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualHubRouteTableArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VirtualHubRouteTableArgs | VirtualHubRouteTableState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VirtualHubRouteTableState | undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["routes"] = state ? state.routes : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["virtualHubId"] = state ? state.virtualHubId : undefined;
        } else {
            const args = argsOrState as VirtualHubRouteTableArgs | undefined;
            if ((!args || args.virtualHubId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualHubId'");
            }
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["routes"] = args ? args.routes : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["virtualHubId"] = args ? args.virtualHubId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VirtualHubRouteTable.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VirtualHubRouteTable resources.
 */
export interface VirtualHubRouteTableState {
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    routes?: pulumi.Input<pulumi.Input<inputs.VirtualHubRouteTableRoute>[]>;
    timeouts?: pulumi.Input<inputs.VirtualHubRouteTableTimeouts>;
    virtualHubId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VirtualHubRouteTable resource.
 */
export interface VirtualHubRouteTableArgs {
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    routes?: pulumi.Input<pulumi.Input<inputs.VirtualHubRouteTableRoute>[]>;
    timeouts?: pulumi.Input<inputs.VirtualHubRouteTableTimeouts>;
    virtualHubId: pulumi.Input<string>;
}
