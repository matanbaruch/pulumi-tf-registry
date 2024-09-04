// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class LoggingFolderSettings extends pulumi.CustomResource {
    /**
     * Get an existing LoggingFolderSettings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LoggingFolderSettingsState, opts?: pulumi.CustomResourceOptions): LoggingFolderSettings {
        return new LoggingFolderSettings(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/loggingFolderSettings:LoggingFolderSettings';

    /**
     * Returns true if the given object is an instance of LoggingFolderSettings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LoggingFolderSettings {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LoggingFolderSettings.__pulumiType;
    }

    /**
     * If set to true, the _Default sink in newly created projects and folders will created in a disabled state. This can be
     * used to automatically disable log storage if there is already an aggregated sink configured in the hierarchy. The
     * _Default sink can be re-enabled manually if needed.
     */
    public readonly disableDefaultSink!: pulumi.Output<boolean>;
    /**
     * The folder for which to retrieve settings.
     */
    public readonly folder!: pulumi.Output<string>;
    /**
     * The resource name for the configured Cloud KMS key.
     */
    public readonly kmsKeyName!: pulumi.Output<string>;
    /**
     * The service account that will be used by the Log Router to access your Cloud KMS key.
     */
    public /*out*/ readonly kmsServiceAccountId!: pulumi.Output<string>;
    /**
     * The service account for the given container. Sinks use this service account as their writerIdentity if no custom service
     * account is provided.
     */
    public /*out*/ readonly loggingServiceAccountId!: pulumi.Output<string>;
    /**
     * The resource name of the settings.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The storage location that Cloud Logging will use to create new resources when a location is needed but not explicitly
     * provided.
     */
    public readonly storageLocation!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.LoggingFolderSettingsTimeouts | undefined>;

    /**
     * Create a LoggingFolderSettings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LoggingFolderSettingsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LoggingFolderSettingsArgs | LoggingFolderSettingsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LoggingFolderSettingsState | undefined;
            resourceInputs["disableDefaultSink"] = state ? state.disableDefaultSink : undefined;
            resourceInputs["folder"] = state ? state.folder : undefined;
            resourceInputs["kmsKeyName"] = state ? state.kmsKeyName : undefined;
            resourceInputs["kmsServiceAccountId"] = state ? state.kmsServiceAccountId : undefined;
            resourceInputs["loggingServiceAccountId"] = state ? state.loggingServiceAccountId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["storageLocation"] = state ? state.storageLocation : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as LoggingFolderSettingsArgs | undefined;
            if ((!args || args.folder === undefined) && !opts.urn) {
                throw new Error("Missing required property 'folder'");
            }
            resourceInputs["disableDefaultSink"] = args ? args.disableDefaultSink : undefined;
            resourceInputs["folder"] = args ? args.folder : undefined;
            resourceInputs["kmsKeyName"] = args ? args.kmsKeyName : undefined;
            resourceInputs["storageLocation"] = args ? args.storageLocation : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["kmsServiceAccountId"] = undefined /*out*/;
            resourceInputs["loggingServiceAccountId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LoggingFolderSettings.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LoggingFolderSettings resources.
 */
export interface LoggingFolderSettingsState {
    /**
     * If set to true, the _Default sink in newly created projects and folders will created in a disabled state. This can be
     * used to automatically disable log storage if there is already an aggregated sink configured in the hierarchy. The
     * _Default sink can be re-enabled manually if needed.
     */
    disableDefaultSink?: pulumi.Input<boolean>;
    /**
     * The folder for which to retrieve settings.
     */
    folder?: pulumi.Input<string>;
    /**
     * The resource name for the configured Cloud KMS key.
     */
    kmsKeyName?: pulumi.Input<string>;
    /**
     * The service account that will be used by the Log Router to access your Cloud KMS key.
     */
    kmsServiceAccountId?: pulumi.Input<string>;
    /**
     * The service account for the given container. Sinks use this service account as their writerIdentity if no custom service
     * account is provided.
     */
    loggingServiceAccountId?: pulumi.Input<string>;
    /**
     * The resource name of the settings.
     */
    name?: pulumi.Input<string>;
    /**
     * The storage location that Cloud Logging will use to create new resources when a location is needed but not explicitly
     * provided.
     */
    storageLocation?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.LoggingFolderSettingsTimeouts>;
}

/**
 * The set of arguments for constructing a LoggingFolderSettings resource.
 */
export interface LoggingFolderSettingsArgs {
    /**
     * If set to true, the _Default sink in newly created projects and folders will created in a disabled state. This can be
     * used to automatically disable log storage if there is already an aggregated sink configured in the hierarchy. The
     * _Default sink can be re-enabled manually if needed.
     */
    disableDefaultSink?: pulumi.Input<boolean>;
    /**
     * The folder for which to retrieve settings.
     */
    folder: pulumi.Input<string>;
    /**
     * The resource name for the configured Cloud KMS key.
     */
    kmsKeyName?: pulumi.Input<string>;
    /**
     * The storage location that Cloud Logging will use to create new resources when a location is needed but not explicitly
     * provided.
     */
    storageLocation?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.LoggingFolderSettingsTimeouts>;
}
