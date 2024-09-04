// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MsteamsWorkflowRecipient extends pulumi.CustomResource {
    /**
     * Get an existing MsteamsWorkflowRecipient resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MsteamsWorkflowRecipientState, opts?: pulumi.CustomResourceOptions): MsteamsWorkflowRecipient {
        return new MsteamsWorkflowRecipient(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'honeycombio:index/msteamsWorkflowRecipient:MsteamsWorkflowRecipient';

    /**
     * Returns true if the given object is an instance of MsteamsWorkflowRecipient.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MsteamsWorkflowRecipient {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MsteamsWorkflowRecipient.__pulumiType;
    }

    /**
     * The name of the recipient.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The Teams Workflow URL to send the notification to.
     */
    public readonly url!: pulumi.Output<string>;

    /**
     * Create a MsteamsWorkflowRecipient resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MsteamsWorkflowRecipientArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MsteamsWorkflowRecipientArgs | MsteamsWorkflowRecipientState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MsteamsWorkflowRecipientState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
        } else {
            const args = argsOrState as MsteamsWorkflowRecipientArgs | undefined;
            if ((!args || args.url === undefined) && !opts.urn) {
                throw new Error("Missing required property 'url'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MsteamsWorkflowRecipient.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MsteamsWorkflowRecipient resources.
 */
export interface MsteamsWorkflowRecipientState {
    /**
     * The name of the recipient.
     */
    name?: pulumi.Input<string>;
    /**
     * The Teams Workflow URL to send the notification to.
     */
    url?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MsteamsWorkflowRecipient resource.
 */
export interface MsteamsWorkflowRecipientArgs {
    /**
     * The name of the recipient.
     */
    name?: pulumi.Input<string>;
    /**
     * The Teams Workflow URL to send the notification to.
     */
    url: pulumi.Input<string>;
}
