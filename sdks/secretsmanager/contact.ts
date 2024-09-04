// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Contact extends pulumi.CustomResource {
    /**
     * Get an existing Contact resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ContactState, opts?: pulumi.CustomResourceOptions): Contact {
        return new Contact(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'secretsmanager:index/contact:Contact';

    /**
     * Returns true if the given object is an instance of Contact.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Contact {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Contact.__pulumiType;
    }

    /**
     * AddressRef field data.
     */
    public readonly addressRef!: pulumi.Output<outputs.ContactAddressRef | undefined>;
    /**
     * Text field data.
     */
    public readonly company!: pulumi.Output<outputs.ContactCompany | undefined>;
    /**
     * Email field data.
     */
    public readonly email!: pulumi.Output<outputs.ContactEmail | undefined>;
    /**
     * FileRef field data.
     */
    public readonly fileRef!: pulumi.Output<outputs.ContactFileRef | undefined>;
    /**
     * The folder UID where the secret is stored. The parent shared folder must be non empty.
     */
    public readonly folderUid!: pulumi.Output<string>;
    /**
     * Name field data.
     */
    public readonly name!: pulumi.Output<outputs.ContactName | undefined>;
    /**
     * The secret notes.
     */
    public readonly notes!: pulumi.Output<string | undefined>;
    /**
     * Phone field data.
     */
    public readonly phone!: pulumi.Output<outputs.ContactPhone | undefined>;
    /**
     * The secret title.
     */
    public readonly title!: pulumi.Output<string | undefined>;
    /**
     * The secret type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The UID of the new secret (using RFC4648 URL and Filename Safe Alphabet).
     */
    public readonly uid!: pulumi.Output<string>;

    /**
     * Create a Contact resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ContactArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ContactArgs | ContactState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ContactState | undefined;
            resourceInputs["addressRef"] = state ? state.addressRef : undefined;
            resourceInputs["company"] = state ? state.company : undefined;
            resourceInputs["email"] = state ? state.email : undefined;
            resourceInputs["fileRef"] = state ? state.fileRef : undefined;
            resourceInputs["folderUid"] = state ? state.folderUid : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notes"] = state ? state.notes : undefined;
            resourceInputs["phone"] = state ? state.phone : undefined;
            resourceInputs["title"] = state ? state.title : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["uid"] = state ? state.uid : undefined;
        } else {
            const args = argsOrState as ContactArgs | undefined;
            resourceInputs["addressRef"] = args ? args.addressRef : undefined;
            resourceInputs["company"] = args ? args.company : undefined;
            resourceInputs["email"] = args ? args.email : undefined;
            resourceInputs["fileRef"] = args ? args.fileRef : undefined;
            resourceInputs["folderUid"] = args ? args.folderUid : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["notes"] = args ? args.notes : undefined;
            resourceInputs["phone"] = args ? args.phone : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
            resourceInputs["uid"] = args ? args.uid : undefined;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Contact.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Contact resources.
 */
export interface ContactState {
    /**
     * AddressRef field data.
     */
    addressRef?: pulumi.Input<inputs.ContactAddressRef>;
    /**
     * Text field data.
     */
    company?: pulumi.Input<inputs.ContactCompany>;
    /**
     * Email field data.
     */
    email?: pulumi.Input<inputs.ContactEmail>;
    /**
     * FileRef field data.
     */
    fileRef?: pulumi.Input<inputs.ContactFileRef>;
    /**
     * The folder UID where the secret is stored. The parent shared folder must be non empty.
     */
    folderUid?: pulumi.Input<string>;
    /**
     * Name field data.
     */
    name?: pulumi.Input<inputs.ContactName>;
    /**
     * The secret notes.
     */
    notes?: pulumi.Input<string>;
    /**
     * Phone field data.
     */
    phone?: pulumi.Input<inputs.ContactPhone>;
    /**
     * The secret title.
     */
    title?: pulumi.Input<string>;
    /**
     * The secret type.
     */
    type?: pulumi.Input<string>;
    /**
     * The UID of the new secret (using RFC4648 URL and Filename Safe Alphabet).
     */
    uid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Contact resource.
 */
export interface ContactArgs {
    /**
     * AddressRef field data.
     */
    addressRef?: pulumi.Input<inputs.ContactAddressRef>;
    /**
     * Text field data.
     */
    company?: pulumi.Input<inputs.ContactCompany>;
    /**
     * Email field data.
     */
    email?: pulumi.Input<inputs.ContactEmail>;
    /**
     * FileRef field data.
     */
    fileRef?: pulumi.Input<inputs.ContactFileRef>;
    /**
     * The folder UID where the secret is stored. The parent shared folder must be non empty.
     */
    folderUid?: pulumi.Input<string>;
    /**
     * Name field data.
     */
    name?: pulumi.Input<inputs.ContactName>;
    /**
     * The secret notes.
     */
    notes?: pulumi.Input<string>;
    /**
     * Phone field data.
     */
    phone?: pulumi.Input<inputs.ContactPhone>;
    /**
     * The secret title.
     */
    title?: pulumi.Input<string>;
    /**
     * The UID of the new secret (using RFC4648 URL and Filename Safe Alphabet).
     */
    uid?: pulumi.Input<string>;
}
