// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EriRouterV1 extends pulumi.CustomResource {
    /**
     * Get an existing EriRouterV1 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EriRouterV1State, opts?: pulumi.CustomResourceOptions): EriRouterV1 {
        return new EriRouterV1(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fic:index/eriRouterV1:EriRouterV1';

    /**
     * Returns true if the given object is an instance of EriRouterV1.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EriRouterV1 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EriRouterV1.__pulumiType;
    }

    public readonly area!: pulumi.Output<string>;
    public /*out*/ readonly firewallId!: pulumi.Output<string>;
    public /*out*/ readonly firewalls!: pulumi.Output<outputs.EriRouterV1Firewall[]>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly natId!: pulumi.Output<string>;
    public /*out*/ readonly nats!: pulumi.Output<outputs.EriRouterV1Nat[]>;
    public readonly redundant!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly routingGroups!: pulumi.Output<outputs.EriRouterV1RoutingGroup[]>;
    public /*out*/ readonly tenantId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.EriRouterV1Timeouts | undefined>;
    public readonly userIpAddress!: pulumi.Output<string>;

    /**
     * Create a EriRouterV1 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EriRouterV1Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EriRouterV1Args | EriRouterV1State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EriRouterV1State | undefined;
            resourceInputs["area"] = state ? state.area : undefined;
            resourceInputs["firewallId"] = state ? state.firewallId : undefined;
            resourceInputs["firewalls"] = state ? state.firewalls : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["natId"] = state ? state.natId : undefined;
            resourceInputs["nats"] = state ? state.nats : undefined;
            resourceInputs["redundant"] = state ? state.redundant : undefined;
            resourceInputs["routingGroups"] = state ? state.routingGroups : undefined;
            resourceInputs["tenantId"] = state ? state.tenantId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["userIpAddress"] = state ? state.userIpAddress : undefined;
        } else {
            const args = argsOrState as EriRouterV1Args | undefined;
            if ((!args || args.area === undefined) && !opts.urn) {
                throw new Error("Missing required property 'area'");
            }
            if ((!args || args.userIpAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userIpAddress'");
            }
            resourceInputs["area"] = args ? args.area : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["redundant"] = args ? args.redundant : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["userIpAddress"] = args ? args.userIpAddress : undefined;
            resourceInputs["firewallId"] = undefined /*out*/;
            resourceInputs["firewalls"] = undefined /*out*/;
            resourceInputs["natId"] = undefined /*out*/;
            resourceInputs["nats"] = undefined /*out*/;
            resourceInputs["routingGroups"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EriRouterV1.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EriRouterV1 resources.
 */
export interface EriRouterV1State {
    area?: pulumi.Input<string>;
    firewallId?: pulumi.Input<string>;
    firewalls?: pulumi.Input<pulumi.Input<inputs.EriRouterV1Firewall>[]>;
    name?: pulumi.Input<string>;
    natId?: pulumi.Input<string>;
    nats?: pulumi.Input<pulumi.Input<inputs.EriRouterV1Nat>[]>;
    redundant?: pulumi.Input<boolean>;
    routingGroups?: pulumi.Input<pulumi.Input<inputs.EriRouterV1RoutingGroup>[]>;
    tenantId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.EriRouterV1Timeouts>;
    userIpAddress?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a EriRouterV1 resource.
 */
export interface EriRouterV1Args {
    area: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    redundant?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.EriRouterV1Timeouts>;
    userIpAddress: pulumi.Input<string>;
}
