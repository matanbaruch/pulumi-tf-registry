// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ConfigBackup extends pulumi.CustomResource {
    /**
     * Get an existing ConfigBackup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConfigBackupState, opts?: pulumi.CustomResourceOptions): ConfigBackup {
        return new ConfigBackup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'f5os:index/configBackup:ConfigBackup';

    /**
     * Returns true if the given object is an instance of ConfigBackup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConfigBackup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConfigBackup.__pulumiType;
    }

    /**
     * Name of the config backup file.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Protocol for config backup file transfer.
     */
    public readonly protocol!: pulumi.Output<string>;
    /**
     * The hostname or IP address of the remote server used for storing the config backup file.
     */
    public readonly remoteHost!: pulumi.Output<string>;
    /**
     * User password for the remote server used for exporting the created config backup file.
     */
    public readonly remotePassword!: pulumi.Output<string>;
    /**
     * The path on the remote server used for uploading the created config backup file.
     */
    public readonly remotePath!: pulumi.Output<string>;
    /**
     * User name for the remote server used for exporting the created config backup file.
     */
    public readonly remoteUser!: pulumi.Output<string>;
    /**
     * The number of seconds to wait for config backup file export to finish. The value must be between 150 and 3600
     */
    public readonly timeout!: pulumi.Output<number>;

    /**
     * Create a ConfigBackup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConfigBackupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ConfigBackupArgs | ConfigBackupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ConfigBackupState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["remoteHost"] = state ? state.remoteHost : undefined;
            resourceInputs["remotePassword"] = state ? state.remotePassword : undefined;
            resourceInputs["remotePath"] = state ? state.remotePath : undefined;
            resourceInputs["remoteUser"] = state ? state.remoteUser : undefined;
            resourceInputs["timeout"] = state ? state.timeout : undefined;
        } else {
            const args = argsOrState as ConfigBackupArgs | undefined;
            if ((!args || args.protocol === undefined) && !opts.urn) {
                throw new Error("Missing required property 'protocol'");
            }
            if ((!args || args.remoteHost === undefined) && !opts.urn) {
                throw new Error("Missing required property 'remoteHost'");
            }
            if ((!args || args.remotePassword === undefined) && !opts.urn) {
                throw new Error("Missing required property 'remotePassword'");
            }
            if ((!args || args.remotePath === undefined) && !opts.urn) {
                throw new Error("Missing required property 'remotePath'");
            }
            if ((!args || args.remoteUser === undefined) && !opts.urn) {
                throw new Error("Missing required property 'remoteUser'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["remoteHost"] = args ? args.remoteHost : undefined;
            resourceInputs["remotePassword"] = args?.remotePassword ? pulumi.secret(args.remotePassword) : undefined;
            resourceInputs["remotePath"] = args ? args.remotePath : undefined;
            resourceInputs["remoteUser"] = args ? args.remoteUser : undefined;
            resourceInputs["timeout"] = args ? args.timeout : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["remotePassword"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ConfigBackup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ConfigBackup resources.
 */
export interface ConfigBackupState {
    /**
     * Name of the config backup file.
     */
    name?: pulumi.Input<string>;
    /**
     * Protocol for config backup file transfer.
     */
    protocol?: pulumi.Input<string>;
    /**
     * The hostname or IP address of the remote server used for storing the config backup file.
     */
    remoteHost?: pulumi.Input<string>;
    /**
     * User password for the remote server used for exporting the created config backup file.
     */
    remotePassword?: pulumi.Input<string>;
    /**
     * The path on the remote server used for uploading the created config backup file.
     */
    remotePath?: pulumi.Input<string>;
    /**
     * User name for the remote server used for exporting the created config backup file.
     */
    remoteUser?: pulumi.Input<string>;
    /**
     * The number of seconds to wait for config backup file export to finish. The value must be between 150 and 3600
     */
    timeout?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a ConfigBackup resource.
 */
export interface ConfigBackupArgs {
    /**
     * Name of the config backup file.
     */
    name?: pulumi.Input<string>;
    /**
     * Protocol for config backup file transfer.
     */
    protocol: pulumi.Input<string>;
    /**
     * The hostname or IP address of the remote server used for storing the config backup file.
     */
    remoteHost: pulumi.Input<string>;
    /**
     * User password for the remote server used for exporting the created config backup file.
     */
    remotePassword: pulumi.Input<string>;
    /**
     * The path on the remote server used for uploading the created config backup file.
     */
    remotePath: pulumi.Input<string>;
    /**
     * User name for the remote server used for exporting the created config backup file.
     */
    remoteUser: pulumi.Input<string>;
    /**
     * The number of seconds to wait for config backup file export to finish. The value must be between 150 and 3600
     */
    timeout?: pulumi.Input<number>;
}
