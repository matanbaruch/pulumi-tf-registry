// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NlbListenerAdditionalCertificateAttachment extends pulumi.CustomResource {
    /**
     * Get an existing NlbListenerAdditionalCertificateAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NlbListenerAdditionalCertificateAttachmentState, opts?: pulumi.CustomResourceOptions): NlbListenerAdditionalCertificateAttachment {
        return new NlbListenerAdditionalCertificateAttachment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/nlbListenerAdditionalCertificateAttachment:NlbListenerAdditionalCertificateAttachment';

    /**
     * Returns true if the given object is an instance of NlbListenerAdditionalCertificateAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NlbListenerAdditionalCertificateAttachment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NlbListenerAdditionalCertificateAttachment.__pulumiType;
    }

    public readonly certificateId!: pulumi.Output<string>;
    public readonly dryRun!: pulumi.Output<boolean | undefined>;
    public readonly listenerId!: pulumi.Output<string>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.NlbListenerAdditionalCertificateAttachmentTimeouts | undefined>;

    /**
     * Create a NlbListenerAdditionalCertificateAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NlbListenerAdditionalCertificateAttachmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NlbListenerAdditionalCertificateAttachmentArgs | NlbListenerAdditionalCertificateAttachmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NlbListenerAdditionalCertificateAttachmentState | undefined;
            resourceInputs["certificateId"] = state ? state.certificateId : undefined;
            resourceInputs["dryRun"] = state ? state.dryRun : undefined;
            resourceInputs["listenerId"] = state ? state.listenerId : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as NlbListenerAdditionalCertificateAttachmentArgs | undefined;
            if ((!args || args.certificateId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'certificateId'");
            }
            if ((!args || args.listenerId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'listenerId'");
            }
            resourceInputs["certificateId"] = args ? args.certificateId : undefined;
            resourceInputs["dryRun"] = args ? args.dryRun : undefined;
            resourceInputs["listenerId"] = args ? args.listenerId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NlbListenerAdditionalCertificateAttachment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NlbListenerAdditionalCertificateAttachment resources.
 */
export interface NlbListenerAdditionalCertificateAttachmentState {
    certificateId?: pulumi.Input<string>;
    dryRun?: pulumi.Input<boolean>;
    listenerId?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.NlbListenerAdditionalCertificateAttachmentTimeouts>;
}

/**
 * The set of arguments for constructing a NlbListenerAdditionalCertificateAttachment resource.
 */
export interface NlbListenerAdditionalCertificateAttachmentArgs {
    certificateId: pulumi.Input<string>;
    dryRun?: pulumi.Input<boolean>;
    listenerId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.NlbListenerAdditionalCertificateAttachmentTimeouts>;
}
