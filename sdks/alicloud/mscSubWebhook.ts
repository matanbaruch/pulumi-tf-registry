// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MscSubWebhook extends pulumi.CustomResource {
    /**
     * Get an existing MscSubWebhook resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MscSubWebhookState, opts?: pulumi.CustomResourceOptions): MscSubWebhook {
        return new MscSubWebhook(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/mscSubWebhook:MscSubWebhook';

    /**
     * Returns true if the given object is an instance of MscSubWebhook.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MscSubWebhook {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MscSubWebhook.__pulumiType;
    }

    public readonly serverUrl!: pulumi.Output<string>;
    public readonly webhookName!: pulumi.Output<string>;

    /**
     * Create a MscSubWebhook resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MscSubWebhookArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MscSubWebhookArgs | MscSubWebhookState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MscSubWebhookState | undefined;
            resourceInputs["serverUrl"] = state ? state.serverUrl : undefined;
            resourceInputs["webhookName"] = state ? state.webhookName : undefined;
        } else {
            const args = argsOrState as MscSubWebhookArgs | undefined;
            if ((!args || args.serverUrl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverUrl'");
            }
            if ((!args || args.webhookName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'webhookName'");
            }
            resourceInputs["serverUrl"] = args ? args.serverUrl : undefined;
            resourceInputs["webhookName"] = args ? args.webhookName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MscSubWebhook.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MscSubWebhook resources.
 */
export interface MscSubWebhookState {
    serverUrl?: pulumi.Input<string>;
    webhookName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MscSubWebhook resource.
 */
export interface MscSubWebhookArgs {
    serverUrl: pulumi.Input<string>;
    webhookName: pulumi.Input<string>;
}
