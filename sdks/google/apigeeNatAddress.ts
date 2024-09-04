// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ApigeeNatAddress extends pulumi.CustomResource {
    /**
     * Get an existing ApigeeNatAddress resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApigeeNatAddressState, opts?: pulumi.CustomResourceOptions): ApigeeNatAddress {
        return new ApigeeNatAddress(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/apigeeNatAddress:ApigeeNatAddress';

    /**
     * Returns true if the given object is an instance of ApigeeNatAddress.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApigeeNatAddress {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApigeeNatAddress.__pulumiType;
    }

    /**
     * The Apigee instance associated with the Apigee environment, in the format
     * 'organizations/{{org_name}}/instances/{{instance_name}}'.
     */
    public readonly instanceId!: pulumi.Output<string>;
    /**
     * The allocated NAT IP address.
     */
    public /*out*/ readonly ipAddress!: pulumi.Output<string>;
    /**
     * Resource ID of the NAT address.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * State of the NAT IP address.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ApigeeNatAddressTimeouts | undefined>;

    /**
     * Create a ApigeeNatAddress resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApigeeNatAddressArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApigeeNatAddressArgs | ApigeeNatAddressState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApigeeNatAddressState | undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["ipAddress"] = state ? state.ipAddress : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ApigeeNatAddressArgs | undefined;
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["ipAddress"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ApigeeNatAddress.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApigeeNatAddress resources.
 */
export interface ApigeeNatAddressState {
    /**
     * The Apigee instance associated with the Apigee environment, in the format
     * 'organizations/{{org_name}}/instances/{{instance_name}}'.
     */
    instanceId?: pulumi.Input<string>;
    /**
     * The allocated NAT IP address.
     */
    ipAddress?: pulumi.Input<string>;
    /**
     * Resource ID of the NAT address.
     */
    name?: pulumi.Input<string>;
    /**
     * State of the NAT IP address.
     */
    state?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ApigeeNatAddressTimeouts>;
}

/**
 * The set of arguments for constructing a ApigeeNatAddress resource.
 */
export interface ApigeeNatAddressArgs {
    /**
     * The Apigee instance associated with the Apigee environment, in the format
     * 'organizations/{{org_name}}/instances/{{instance_name}}'.
     */
    instanceId: pulumi.Input<string>;
    /**
     * Resource ID of the NAT address.
     */
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ApigeeNatAddressTimeouts>;
}
