// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ApigeeEnvgroupAttachment extends pulumi.CustomResource {
    /**
     * Get an existing ApigeeEnvgroupAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApigeeEnvgroupAttachmentState, opts?: pulumi.CustomResourceOptions): ApigeeEnvgroupAttachment {
        return new ApigeeEnvgroupAttachment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/apigeeEnvgroupAttachment:ApigeeEnvgroupAttachment';

    /**
     * Returns true if the given object is an instance of ApigeeEnvgroupAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApigeeEnvgroupAttachment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApigeeEnvgroupAttachment.__pulumiType;
    }

    /**
     * The Apigee environment group associated with the Apigee environment, in the format
     * 'organizations/{{org_name}}/envgroups/{{envgroup_name}}'.
     */
    public readonly envgroupId!: pulumi.Output<string>;
    /**
     * The resource ID of the environment.
     */
    public readonly environment!: pulumi.Output<string>;
    /**
     * The name of the newly created attachment (output parameter).
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ApigeeEnvgroupAttachmentTimeouts | undefined>;

    /**
     * Create a ApigeeEnvgroupAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApigeeEnvgroupAttachmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApigeeEnvgroupAttachmentArgs | ApigeeEnvgroupAttachmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApigeeEnvgroupAttachmentState | undefined;
            resourceInputs["envgroupId"] = state ? state.envgroupId : undefined;
            resourceInputs["environment"] = state ? state.environment : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ApigeeEnvgroupAttachmentArgs | undefined;
            if ((!args || args.envgroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'envgroupId'");
            }
            if ((!args || args.environment === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environment'");
            }
            resourceInputs["envgroupId"] = args ? args.envgroupId : undefined;
            resourceInputs["environment"] = args ? args.environment : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["name"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ApigeeEnvgroupAttachment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApigeeEnvgroupAttachment resources.
 */
export interface ApigeeEnvgroupAttachmentState {
    /**
     * The Apigee environment group associated with the Apigee environment, in the format
     * 'organizations/{{org_name}}/envgroups/{{envgroup_name}}'.
     */
    envgroupId?: pulumi.Input<string>;
    /**
     * The resource ID of the environment.
     */
    environment?: pulumi.Input<string>;
    /**
     * The name of the newly created attachment (output parameter).
     */
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ApigeeEnvgroupAttachmentTimeouts>;
}

/**
 * The set of arguments for constructing a ApigeeEnvgroupAttachment resource.
 */
export interface ApigeeEnvgroupAttachmentArgs {
    /**
     * The Apigee environment group associated with the Apigee environment, in the format
     * 'organizations/{{org_name}}/envgroups/{{envgroup_name}}'.
     */
    envgroupId: pulumi.Input<string>;
    /**
     * The resource ID of the environment.
     */
    environment: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ApigeeEnvgroupAttachmentTimeouts>;
}
