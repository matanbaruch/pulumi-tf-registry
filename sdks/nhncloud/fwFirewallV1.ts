// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class FwFirewallV1 extends pulumi.CustomResource {
    /**
     * Get an existing FwFirewallV1 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FwFirewallV1State, opts?: pulumi.CustomResourceOptions): FwFirewallV1 {
        return new FwFirewallV1(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nhncloud:index/fwFirewallV1:FwFirewallV1';

    /**
     * Returns true if the given object is an instance of FwFirewallV1.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FwFirewallV1 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FwFirewallV1.__pulumiType;
    }

    public readonly adminStateUp!: pulumi.Output<boolean | undefined>;
    public readonly associatedRouters!: pulumi.Output<string[]>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly noRouters!: pulumi.Output<boolean | undefined>;
    public readonly policyId!: pulumi.Output<string>;
    public readonly region!: pulumi.Output<string>;
    public readonly tenantId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.FwFirewallV1Timeouts | undefined>;
    public readonly valueSpecs!: pulumi.Output<{[key: string]: string} | undefined>;

    /**
     * Create a FwFirewallV1 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FwFirewallV1Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FwFirewallV1Args | FwFirewallV1State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FwFirewallV1State | undefined;
            resourceInputs["adminStateUp"] = state ? state.adminStateUp : undefined;
            resourceInputs["associatedRouters"] = state ? state.associatedRouters : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["noRouters"] = state ? state.noRouters : undefined;
            resourceInputs["policyId"] = state ? state.policyId : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["tenantId"] = state ? state.tenantId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["valueSpecs"] = state ? state.valueSpecs : undefined;
        } else {
            const args = argsOrState as FwFirewallV1Args | undefined;
            if ((!args || args.policyId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyId'");
            }
            resourceInputs["adminStateUp"] = args ? args.adminStateUp : undefined;
            resourceInputs["associatedRouters"] = args ? args.associatedRouters : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["noRouters"] = args ? args.noRouters : undefined;
            resourceInputs["policyId"] = args ? args.policyId : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["valueSpecs"] = args ? args.valueSpecs : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FwFirewallV1.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FwFirewallV1 resources.
 */
export interface FwFirewallV1State {
    adminStateUp?: pulumi.Input<boolean>;
    associatedRouters?: pulumi.Input<pulumi.Input<string>[]>;
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    noRouters?: pulumi.Input<boolean>;
    policyId?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    tenantId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.FwFirewallV1Timeouts>;
    valueSpecs?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a FwFirewallV1 resource.
 */
export interface FwFirewallV1Args {
    adminStateUp?: pulumi.Input<boolean>;
    associatedRouters?: pulumi.Input<pulumi.Input<string>[]>;
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    noRouters?: pulumi.Input<boolean>;
    policyId: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    tenantId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.FwFirewallV1Timeouts>;
    valueSpecs?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
