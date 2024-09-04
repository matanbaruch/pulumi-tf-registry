// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AccessContextManagerGcpUserAccessBinding extends pulumi.CustomResource {
    /**
     * Get an existing AccessContextManagerGcpUserAccessBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AccessContextManagerGcpUserAccessBindingState, opts?: pulumi.CustomResourceOptions): AccessContextManagerGcpUserAccessBinding {
        return new AccessContextManagerGcpUserAccessBinding(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/accessContextManagerGcpUserAccessBinding:AccessContextManagerGcpUserAccessBinding';

    /**
     * Returns true if the given object is an instance of AccessContextManagerGcpUserAccessBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AccessContextManagerGcpUserAccessBinding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AccessContextManagerGcpUserAccessBinding.__pulumiType;
    }

    /**
     * Required. Access level that a user must have to be granted access. Only one access level is supported, not multiple.
     * This repeated field must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"
     */
    public readonly accessLevels!: pulumi.Output<string[]>;
    /**
     * Required. Immutable. Google Group id whose members are subject to this binding's restrictions. See "id" in the G Suite
     * Directory API's Groups resource. If a group's email address/alias is changed, this resource will continue to point at
     * the changed group. This field does not accept group email addresses or aliases. Example: "01d520gv4vjcrht"
     */
    public readonly groupKey!: pulumi.Output<string>;
    /**
     * Immutable. Assigned by the server during creation. The last segment has an arbitrary length and has only URI unreserved
     * characters (as defined by RFC 3986 Section 2.3). Should not be specified by the client during creation. Example:
     * "organizations/256/gcpUserAccessBindings/b3-BhcX_Ud5N"
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Required. ID of the parent organization.
     */
    public readonly organizationId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.AccessContextManagerGcpUserAccessBindingTimeouts | undefined>;

    /**
     * Create a AccessContextManagerGcpUserAccessBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccessContextManagerGcpUserAccessBindingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AccessContextManagerGcpUserAccessBindingArgs | AccessContextManagerGcpUserAccessBindingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AccessContextManagerGcpUserAccessBindingState | undefined;
            resourceInputs["accessLevels"] = state ? state.accessLevels : undefined;
            resourceInputs["groupKey"] = state ? state.groupKey : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["organizationId"] = state ? state.organizationId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as AccessContextManagerGcpUserAccessBindingArgs | undefined;
            if ((!args || args.accessLevels === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessLevels'");
            }
            if ((!args || args.groupKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupKey'");
            }
            if ((!args || args.organizationId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'organizationId'");
            }
            resourceInputs["accessLevels"] = args ? args.accessLevels : undefined;
            resourceInputs["groupKey"] = args ? args.groupKey : undefined;
            resourceInputs["organizationId"] = args ? args.organizationId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["name"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AccessContextManagerGcpUserAccessBinding.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AccessContextManagerGcpUserAccessBinding resources.
 */
export interface AccessContextManagerGcpUserAccessBindingState {
    /**
     * Required. Access level that a user must have to be granted access. Only one access level is supported, not multiple.
     * This repeated field must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"
     */
    accessLevels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Required. Immutable. Google Group id whose members are subject to this binding's restrictions. See "id" in the G Suite
     * Directory API's Groups resource. If a group's email address/alias is changed, this resource will continue to point at
     * the changed group. This field does not accept group email addresses or aliases. Example: "01d520gv4vjcrht"
     */
    groupKey?: pulumi.Input<string>;
    /**
     * Immutable. Assigned by the server during creation. The last segment has an arbitrary length and has only URI unreserved
     * characters (as defined by RFC 3986 Section 2.3). Should not be specified by the client during creation. Example:
     * "organizations/256/gcpUserAccessBindings/b3-BhcX_Ud5N"
     */
    name?: pulumi.Input<string>;
    /**
     * Required. ID of the parent organization.
     */
    organizationId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AccessContextManagerGcpUserAccessBindingTimeouts>;
}

/**
 * The set of arguments for constructing a AccessContextManagerGcpUserAccessBinding resource.
 */
export interface AccessContextManagerGcpUserAccessBindingArgs {
    /**
     * Required. Access level that a user must have to be granted access. Only one access level is supported, not multiple.
     * This repeated field must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"
     */
    accessLevels: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Required. Immutable. Google Group id whose members are subject to this binding's restrictions. See "id" in the G Suite
     * Directory API's Groups resource. If a group's email address/alias is changed, this resource will continue to point at
     * the changed group. This field does not accept group email addresses or aliases. Example: "01d520gv4vjcrht"
     */
    groupKey: pulumi.Input<string>;
    /**
     * Required. ID of the parent organization.
     */
    organizationId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AccessContextManagerGcpUserAccessBindingTimeouts>;
}
