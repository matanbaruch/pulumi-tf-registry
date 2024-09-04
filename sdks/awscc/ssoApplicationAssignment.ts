// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SsoApplicationAssignment extends pulumi.CustomResource {
    /**
     * Get an existing SsoApplicationAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SsoApplicationAssignmentState, opts?: pulumi.CustomResourceOptions): SsoApplicationAssignment {
        return new SsoApplicationAssignment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/ssoApplicationAssignment:SsoApplicationAssignment';

    /**
     * Returns true if the given object is an instance of SsoApplicationAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SsoApplicationAssignment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SsoApplicationAssignment.__pulumiType;
    }

    /**
     * The ARN of the application.
     */
    public readonly applicationArn!: pulumi.Output<string>;
    /**
     * An identifier for an object in IAM Identity Center, such as a user or group
     */
    public readonly principalId!: pulumi.Output<string>;
    /**
     * The entity type for which the assignment will be created.
     */
    public readonly principalType!: pulumi.Output<string>;

    /**
     * Create a SsoApplicationAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SsoApplicationAssignmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SsoApplicationAssignmentArgs | SsoApplicationAssignmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SsoApplicationAssignmentState | undefined;
            resourceInputs["applicationArn"] = state ? state.applicationArn : undefined;
            resourceInputs["principalId"] = state ? state.principalId : undefined;
            resourceInputs["principalType"] = state ? state.principalType : undefined;
        } else {
            const args = argsOrState as SsoApplicationAssignmentArgs | undefined;
            if ((!args || args.applicationArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'applicationArn'");
            }
            if ((!args || args.principalId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'principalId'");
            }
            if ((!args || args.principalType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'principalType'");
            }
            resourceInputs["applicationArn"] = args ? args.applicationArn : undefined;
            resourceInputs["principalId"] = args ? args.principalId : undefined;
            resourceInputs["principalType"] = args ? args.principalType : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SsoApplicationAssignment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SsoApplicationAssignment resources.
 */
export interface SsoApplicationAssignmentState {
    /**
     * The ARN of the application.
     */
    applicationArn?: pulumi.Input<string>;
    /**
     * An identifier for an object in IAM Identity Center, such as a user or group
     */
    principalId?: pulumi.Input<string>;
    /**
     * The entity type for which the assignment will be created.
     */
    principalType?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SsoApplicationAssignment resource.
 */
export interface SsoApplicationAssignmentArgs {
    /**
     * The ARN of the application.
     */
    applicationArn: pulumi.Input<string>;
    /**
     * An identifier for an object in IAM Identity Center, such as a user or group
     */
    principalId: pulumi.Input<string>;
    /**
     * The entity type for which the assignment will be created.
     */
    principalType: pulumi.Input<string>;
}
