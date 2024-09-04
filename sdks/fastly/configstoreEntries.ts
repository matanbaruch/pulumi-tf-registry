// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ConfigstoreEntries extends pulumi.CustomResource {
    /**
     * Get an existing ConfigstoreEntries resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConfigstoreEntriesState, opts?: pulumi.CustomResourceOptions): ConfigstoreEntries {
        return new ConfigstoreEntries(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fastly:index/configstoreEntries:ConfigstoreEntries';

    /**
     * Returns true if the given object is an instance of ConfigstoreEntries.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConfigstoreEntries {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConfigstoreEntries.__pulumiType;
    }

    /**
     * A map representing an entry in the Config Store, (key/value)
     */
    public readonly entries!: pulumi.Output<{[key: string]: string}>;
    public readonly manageEntries!: pulumi.Output<boolean | undefined>;
    /**
     * An alphanumeric string identifying the Config Store.
     */
    public readonly storeId!: pulumi.Output<string>;

    /**
     * Create a ConfigstoreEntries resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConfigstoreEntriesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ConfigstoreEntriesArgs | ConfigstoreEntriesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ConfigstoreEntriesState | undefined;
            resourceInputs["entries"] = state ? state.entries : undefined;
            resourceInputs["manageEntries"] = state ? state.manageEntries : undefined;
            resourceInputs["storeId"] = state ? state.storeId : undefined;
        } else {
            const args = argsOrState as ConfigstoreEntriesArgs | undefined;
            if ((!args || args.entries === undefined) && !opts.urn) {
                throw new Error("Missing required property 'entries'");
            }
            if ((!args || args.storeId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storeId'");
            }
            resourceInputs["entries"] = args ? args.entries : undefined;
            resourceInputs["manageEntries"] = args ? args.manageEntries : undefined;
            resourceInputs["storeId"] = args ? args.storeId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ConfigstoreEntries.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ConfigstoreEntries resources.
 */
export interface ConfigstoreEntriesState {
    /**
     * A map representing an entry in the Config Store, (key/value)
     */
    entries?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    manageEntries?: pulumi.Input<boolean>;
    /**
     * An alphanumeric string identifying the Config Store.
     */
    storeId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ConfigstoreEntries resource.
 */
export interface ConfigstoreEntriesArgs {
    /**
     * A map representing an entry in the Config Store, (key/value)
     */
    entries: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    manageEntries?: pulumi.Input<boolean>;
    /**
     * An alphanumeric string identifying the Config Store.
     */
    storeId: pulumi.Input<string>;
}
