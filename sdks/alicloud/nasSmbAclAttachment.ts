// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class NasSmbAclAttachment extends pulumi.CustomResource {
    /**
     * Get an existing NasSmbAclAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NasSmbAclAttachmentState, opts?: pulumi.CustomResourceOptions): NasSmbAclAttachment {
        return new NasSmbAclAttachment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/nasSmbAclAttachment:NasSmbAclAttachment';

    /**
     * Returns true if the given object is an instance of NasSmbAclAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NasSmbAclAttachment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NasSmbAclAttachment.__pulumiType;
    }

    public /*out*/ readonly authMethod!: pulumi.Output<string>;
    public readonly enableAnonymousAccess!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly enabled!: pulumi.Output<string>;
    public readonly encryptData!: pulumi.Output<boolean | undefined>;
    public readonly fileSystemId!: pulumi.Output<string>;
    public readonly homeDirPath!: pulumi.Output<string | undefined>;
    public readonly keytab!: pulumi.Output<string>;
    public readonly keytabMd5!: pulumi.Output<string>;
    public readonly rejectUnencryptedAccess!: pulumi.Output<boolean | undefined>;
    public readonly superAdminSid!: pulumi.Output<string | undefined>;

    /**
     * Create a NasSmbAclAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NasSmbAclAttachmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NasSmbAclAttachmentArgs | NasSmbAclAttachmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NasSmbAclAttachmentState | undefined;
            resourceInputs["authMethod"] = state ? state.authMethod : undefined;
            resourceInputs["enableAnonymousAccess"] = state ? state.enableAnonymousAccess : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["encryptData"] = state ? state.encryptData : undefined;
            resourceInputs["fileSystemId"] = state ? state.fileSystemId : undefined;
            resourceInputs["homeDirPath"] = state ? state.homeDirPath : undefined;
            resourceInputs["keytab"] = state ? state.keytab : undefined;
            resourceInputs["keytabMd5"] = state ? state.keytabMd5 : undefined;
            resourceInputs["rejectUnencryptedAccess"] = state ? state.rejectUnencryptedAccess : undefined;
            resourceInputs["superAdminSid"] = state ? state.superAdminSid : undefined;
        } else {
            const args = argsOrState as NasSmbAclAttachmentArgs | undefined;
            if ((!args || args.fileSystemId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fileSystemId'");
            }
            if ((!args || args.keytab === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keytab'");
            }
            if ((!args || args.keytabMd5 === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keytabMd5'");
            }
            resourceInputs["enableAnonymousAccess"] = args ? args.enableAnonymousAccess : undefined;
            resourceInputs["encryptData"] = args ? args.encryptData : undefined;
            resourceInputs["fileSystemId"] = args ? args.fileSystemId : undefined;
            resourceInputs["homeDirPath"] = args ? args.homeDirPath : undefined;
            resourceInputs["keytab"] = args ? args.keytab : undefined;
            resourceInputs["keytabMd5"] = args ? args.keytabMd5 : undefined;
            resourceInputs["rejectUnencryptedAccess"] = args ? args.rejectUnencryptedAccess : undefined;
            resourceInputs["superAdminSid"] = args ? args.superAdminSid : undefined;
            resourceInputs["authMethod"] = undefined /*out*/;
            resourceInputs["enabled"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NasSmbAclAttachment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NasSmbAclAttachment resources.
 */
export interface NasSmbAclAttachmentState {
    authMethod?: pulumi.Input<string>;
    enableAnonymousAccess?: pulumi.Input<boolean>;
    enabled?: pulumi.Input<string>;
    encryptData?: pulumi.Input<boolean>;
    fileSystemId?: pulumi.Input<string>;
    homeDirPath?: pulumi.Input<string>;
    keytab?: pulumi.Input<string>;
    keytabMd5?: pulumi.Input<string>;
    rejectUnencryptedAccess?: pulumi.Input<boolean>;
    superAdminSid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NasSmbAclAttachment resource.
 */
export interface NasSmbAclAttachmentArgs {
    enableAnonymousAccess?: pulumi.Input<boolean>;
    encryptData?: pulumi.Input<boolean>;
    fileSystemId: pulumi.Input<string>;
    homeDirPath?: pulumi.Input<string>;
    keytab: pulumi.Input<string>;
    keytabMd5: pulumi.Input<string>;
    rejectUnencryptedAccess?: pulumi.Input<boolean>;
    superAdminSid?: pulumi.Input<string>;
}
