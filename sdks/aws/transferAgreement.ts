// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class TransferAgreement extends pulumi.CustomResource {
    /**
     * Get an existing TransferAgreement resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TransferAgreementState, opts?: pulumi.CustomResourceOptions): TransferAgreement {
        return new TransferAgreement(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/transferAgreement:TransferAgreement';

    /**
     * Returns true if the given object is an instance of TransferAgreement.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TransferAgreement {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TransferAgreement.__pulumiType;
    }

    public readonly accessRole!: pulumi.Output<string>;
    public /*out*/ readonly agreementId!: pulumi.Output<string>;
    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly baseDirectory!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly localProfileId!: pulumi.Output<string>;
    public readonly partnerProfileId!: pulumi.Output<string>;
    public readonly serverId!: pulumi.Output<string>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;

    /**
     * Create a TransferAgreement resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TransferAgreementArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TransferAgreementArgs | TransferAgreementState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TransferAgreementState | undefined;
            resourceInputs["accessRole"] = state ? state.accessRole : undefined;
            resourceInputs["agreementId"] = state ? state.agreementId : undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["baseDirectory"] = state ? state.baseDirectory : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["localProfileId"] = state ? state.localProfileId : undefined;
            resourceInputs["partnerProfileId"] = state ? state.partnerProfileId : undefined;
            resourceInputs["serverId"] = state ? state.serverId : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
        } else {
            const args = argsOrState as TransferAgreementArgs | undefined;
            if ((!args || args.accessRole === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessRole'");
            }
            if ((!args || args.baseDirectory === undefined) && !opts.urn) {
                throw new Error("Missing required property 'baseDirectory'");
            }
            if ((!args || args.localProfileId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'localProfileId'");
            }
            if ((!args || args.partnerProfileId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'partnerProfileId'");
            }
            if ((!args || args.serverId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverId'");
            }
            resourceInputs["accessRole"] = args ? args.accessRole : undefined;
            resourceInputs["baseDirectory"] = args ? args.baseDirectory : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["localProfileId"] = args ? args.localProfileId : undefined;
            resourceInputs["partnerProfileId"] = args ? args.partnerProfileId : undefined;
            resourceInputs["serverId"] = args ? args.serverId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["agreementId"] = undefined /*out*/;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TransferAgreement.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TransferAgreement resources.
 */
export interface TransferAgreementState {
    accessRole?: pulumi.Input<string>;
    agreementId?: pulumi.Input<string>;
    arn?: pulumi.Input<string>;
    baseDirectory?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    localProfileId?: pulumi.Input<string>;
    partnerProfileId?: pulumi.Input<string>;
    serverId?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a TransferAgreement resource.
 */
export interface TransferAgreementArgs {
    accessRole: pulumi.Input<string>;
    baseDirectory: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    localProfileId: pulumi.Input<string>;
    partnerProfileId: pulumi.Input<string>;
    serverId: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
