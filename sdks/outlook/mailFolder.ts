// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MailFolder extends pulumi.CustomResource {
    /**
     * Get an existing MailFolder resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MailFolderState, opts?: pulumi.CustomResourceOptions): MailFolder {
        return new MailFolder(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'outlook:index/mailFolder:MailFolder';

    /**
     * Returns true if the given object is an instance of MailFolder.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MailFolder {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MailFolder.__pulumiType;
    }

    public readonly name!: pulumi.Output<string>;
    public readonly parentFolderId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.MailFolderTimeouts | undefined>;

    /**
     * Create a MailFolder resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: MailFolderArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MailFolderArgs | MailFolderState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MailFolderState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["parentFolderId"] = state ? state.parentFolderId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as MailFolderArgs | undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["parentFolderId"] = args ? args.parentFolderId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MailFolder.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MailFolder resources.
 */
export interface MailFolderState {
    name?: pulumi.Input<string>;
    parentFolderId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MailFolderTimeouts>;
}

/**
 * The set of arguments for constructing a MailFolder resource.
 */
export interface MailFolderArgs {
    name?: pulumi.Input<string>;
    parentFolderId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MailFolderTimeouts>;
}
