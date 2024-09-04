// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IotsitewiseAccessPolicy extends pulumi.CustomResource {
    /**
     * Get an existing IotsitewiseAccessPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IotsitewiseAccessPolicyState, opts?: pulumi.CustomResourceOptions): IotsitewiseAccessPolicy {
        return new IotsitewiseAccessPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/iotsitewiseAccessPolicy:IotsitewiseAccessPolicy';

    /**
     * Returns true if the given object is an instance of IotsitewiseAccessPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IotsitewiseAccessPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IotsitewiseAccessPolicy.__pulumiType;
    }

    /**
     * The ARN of the access policy.
     */
    public /*out*/ readonly accessPolicyArn!: pulumi.Output<string>;
    /**
     * The ID of the access policy.
     */
    public /*out*/ readonly accessPolicyId!: pulumi.Output<string>;
    /**
     * The identity for this access policy. Choose either a user or a group but not both.
     */
    public readonly accessPolicyIdentity!: pulumi.Output<outputs.IotsitewiseAccessPolicyAccessPolicyIdentity>;
    /**
     * The permission level for this access policy. Valid values are ADMINISTRATOR or VIEWER.
     */
    public readonly accessPolicyPermission!: pulumi.Output<string>;
    /**
     * The AWS IoT SiteWise Monitor resource for this access policy. Choose either portal or project but not both.
     */
    public readonly accessPolicyResource!: pulumi.Output<outputs.IotsitewiseAccessPolicyAccessPolicyResource>;

    /**
     * Create a IotsitewiseAccessPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IotsitewiseAccessPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IotsitewiseAccessPolicyArgs | IotsitewiseAccessPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IotsitewiseAccessPolicyState | undefined;
            resourceInputs["accessPolicyArn"] = state ? state.accessPolicyArn : undefined;
            resourceInputs["accessPolicyId"] = state ? state.accessPolicyId : undefined;
            resourceInputs["accessPolicyIdentity"] = state ? state.accessPolicyIdentity : undefined;
            resourceInputs["accessPolicyPermission"] = state ? state.accessPolicyPermission : undefined;
            resourceInputs["accessPolicyResource"] = state ? state.accessPolicyResource : undefined;
        } else {
            const args = argsOrState as IotsitewiseAccessPolicyArgs | undefined;
            if ((!args || args.accessPolicyIdentity === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessPolicyIdentity'");
            }
            if ((!args || args.accessPolicyPermission === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessPolicyPermission'");
            }
            if ((!args || args.accessPolicyResource === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessPolicyResource'");
            }
            resourceInputs["accessPolicyIdentity"] = args ? args.accessPolicyIdentity : undefined;
            resourceInputs["accessPolicyPermission"] = args ? args.accessPolicyPermission : undefined;
            resourceInputs["accessPolicyResource"] = args ? args.accessPolicyResource : undefined;
            resourceInputs["accessPolicyArn"] = undefined /*out*/;
            resourceInputs["accessPolicyId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IotsitewiseAccessPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IotsitewiseAccessPolicy resources.
 */
export interface IotsitewiseAccessPolicyState {
    /**
     * The ARN of the access policy.
     */
    accessPolicyArn?: pulumi.Input<string>;
    /**
     * The ID of the access policy.
     */
    accessPolicyId?: pulumi.Input<string>;
    /**
     * The identity for this access policy. Choose either a user or a group but not both.
     */
    accessPolicyIdentity?: pulumi.Input<inputs.IotsitewiseAccessPolicyAccessPolicyIdentity>;
    /**
     * The permission level for this access policy. Valid values are ADMINISTRATOR or VIEWER.
     */
    accessPolicyPermission?: pulumi.Input<string>;
    /**
     * The AWS IoT SiteWise Monitor resource for this access policy. Choose either portal or project but not both.
     */
    accessPolicyResource?: pulumi.Input<inputs.IotsitewiseAccessPolicyAccessPolicyResource>;
}

/**
 * The set of arguments for constructing a IotsitewiseAccessPolicy resource.
 */
export interface IotsitewiseAccessPolicyArgs {
    /**
     * The identity for this access policy. Choose either a user or a group but not both.
     */
    accessPolicyIdentity: pulumi.Input<inputs.IotsitewiseAccessPolicyAccessPolicyIdentity>;
    /**
     * The permission level for this access policy. Valid values are ADMINISTRATOR or VIEWER.
     */
    accessPolicyPermission: pulumi.Input<string>;
    /**
     * The AWS IoT SiteWise Monitor resource for this access policy. Choose either portal or project but not both.
     */
    accessPolicyResource: pulumi.Input<inputs.IotsitewiseAccessPolicyAccessPolicyResource>;
}
