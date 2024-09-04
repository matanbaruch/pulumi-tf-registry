// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CertificateStore extends pulumi.CustomResource {
    /**
     * Get an existing CertificateStore resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CertificateStoreState, opts?: pulumi.CustomResourceOptions): CertificateStore {
        return new CertificateStore(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'keyfactor:index/certificateStore:CertificateStore';

    /**
     * Returns true if the given object is an instance of CertificateStore.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CertificateStore {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CertificateStore.__pulumiType;
    }

    /**
     * Bool indicating if there is an orchestrator assigned to the new certificate store.
     */
    public /*out*/ readonly agentAssigned!: pulumi.Output<boolean>;
    /**
     * String indicating the Keyfactor Command GUID of the orchestrator for the created store.
     */
    public /*out*/ readonly agentId!: pulumi.Output<string>;
    /**
     * Can be either ClientMachine or the Keyfactor Command GUID of the orchestrator to use for managing the certificate store.
     * The agent must support the certificate store type and be approved.
     */
    public readonly agentIdentifier!: pulumi.Output<string>;
    /**
     * Bool that indicates the approval status of store. Unapproved stores come from store Discovery and cannot be used for
     * certificate operations.
     */
    public /*out*/ readonly approved!: pulumi.Output<boolean>;
    /**
     * Client machine name; value depends on certificate store type. See API reference guide and/or store type documentation.
     */
    public readonly clientMachine!: pulumi.Output<string>;
    /**
     * Container identifier of the store's associated certificate store container.
     */
    public /*out*/ readonly containerId!: pulumi.Output<number>;
    /**
     * Name of the container you want to associate the certificate store with. NOTE: The container must already exist and be of
     * the same certificate store type.
     */
    public readonly containerName!: pulumi.Output<string | undefined>;
    /**
     * Determines whether the store create job will be scheduled. WARNING: If set to TRUE, each apply will trigger a store
     * create job, if the store type support Create. This may cause issues if the store already exists but will depend on the
     * store type.
     */
    public readonly createIfMissing!: pulumi.Output<boolean | undefined>;
    /**
     * Display name of the certificate store. Is the concatenation of 'ClientMachine - StorePath'.
     */
    public /*out*/ readonly displayName!: pulumi.Output<string>;
    /**
     * String indicating the schedule for inventory updates. Valid formats are: "immediate" - schedules and immediate job "1d"
     * - schedules a daily job "12h" - schedules a job every 12 hours "30m" - schedules a job every 30 minutes
     */
    public readonly inventorySchedule!: pulumi.Output<string | undefined>;
    /**
     * Certificate properties specific to certificate store type configured as key-value pairs. NOTE: Special properties
     * 'ServerUsername' and 'ServerPassword' are required for some store types and should not be declared in this attribute and
     * have their own dedicated values. See store type documentation for more information.
     */
    public readonly properties!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The password to access the host of the certificate store. In Keyfactor Command this is the 'ServerUsername' field found
     * in the store type 'Properties'. Whether this is required and what format will vary based on store type definitions,
     * please review the store type documentation for more information.
     */
    public readonly serverPassword!: pulumi.Output<string | undefined>;
    /**
     * Indicates whether the certificate store host requires SSL. In Keyfactor Command this is the 'ServerUseSsl' field found
     * in the store type 'Properties'. Whether this is required and what format will vary based on store type definitions,
     * please review the store type documentation for more information.
     */
    public readonly serverUseSsl!: pulumi.Output<boolean | undefined>;
    /**
     * The username to access the host of the certificate store. In Keyfactor Command this is the 'ServerUsername' field found
     * in the store type 'Properties'. Whether this is required and what format will vary based on store type definitions,
     * please review the store type documentation for more information.
     */
    public readonly serverUsername!: pulumi.Output<string | undefined>;
    /**
     * Indicates whether the store password can be changed.
     */
    public /*out*/ readonly setNewPasswordAllowed!: pulumi.Output<boolean>;
    /**
     * The password to access the contents of the certificate store. In Keyfactor Command this is the 'StorePassword' field.
     * field found in the store type 'Properties'. Whether this is required and what format will vary based on store type
     * definitions, please review the store type documentation for more information.
     */
    public readonly storePassword!: pulumi.Output<string | undefined>;
    /**
     * Path to the new certificate store on a target. Format varies depending on store type see the store type documentation
     * for more information.
     */
    public readonly storePath!: pulumi.Output<string>;
    /**
     * Short name of certificate store type.
     */
    public readonly storeType!: pulumi.Output<string>;

    /**
     * Create a CertificateStore resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CertificateStoreArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CertificateStoreArgs | CertificateStoreState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CertificateStoreState | undefined;
            resourceInputs["agentAssigned"] = state ? state.agentAssigned : undefined;
            resourceInputs["agentId"] = state ? state.agentId : undefined;
            resourceInputs["agentIdentifier"] = state ? state.agentIdentifier : undefined;
            resourceInputs["approved"] = state ? state.approved : undefined;
            resourceInputs["clientMachine"] = state ? state.clientMachine : undefined;
            resourceInputs["containerId"] = state ? state.containerId : undefined;
            resourceInputs["containerName"] = state ? state.containerName : undefined;
            resourceInputs["createIfMissing"] = state ? state.createIfMissing : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["inventorySchedule"] = state ? state.inventorySchedule : undefined;
            resourceInputs["properties"] = state ? state.properties : undefined;
            resourceInputs["serverPassword"] = state ? state.serverPassword : undefined;
            resourceInputs["serverUseSsl"] = state ? state.serverUseSsl : undefined;
            resourceInputs["serverUsername"] = state ? state.serverUsername : undefined;
            resourceInputs["setNewPasswordAllowed"] = state ? state.setNewPasswordAllowed : undefined;
            resourceInputs["storePassword"] = state ? state.storePassword : undefined;
            resourceInputs["storePath"] = state ? state.storePath : undefined;
            resourceInputs["storeType"] = state ? state.storeType : undefined;
        } else {
            const args = argsOrState as CertificateStoreArgs | undefined;
            if ((!args || args.agentIdentifier === undefined) && !opts.urn) {
                throw new Error("Missing required property 'agentIdentifier'");
            }
            if ((!args || args.clientMachine === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clientMachine'");
            }
            if ((!args || args.storePath === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storePath'");
            }
            if ((!args || args.storeType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storeType'");
            }
            resourceInputs["agentIdentifier"] = args ? args.agentIdentifier : undefined;
            resourceInputs["clientMachine"] = args ? args.clientMachine : undefined;
            resourceInputs["containerName"] = args ? args.containerName : undefined;
            resourceInputs["createIfMissing"] = args ? args.createIfMissing : undefined;
            resourceInputs["inventorySchedule"] = args ? args.inventorySchedule : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["serverPassword"] = args?.serverPassword ? pulumi.secret(args.serverPassword) : undefined;
            resourceInputs["serverUseSsl"] = args ? args.serverUseSsl : undefined;
            resourceInputs["serverUsername"] = args ? args.serverUsername : undefined;
            resourceInputs["storePassword"] = args?.storePassword ? pulumi.secret(args.storePassword) : undefined;
            resourceInputs["storePath"] = args ? args.storePath : undefined;
            resourceInputs["storeType"] = args ? args.storeType : undefined;
            resourceInputs["agentAssigned"] = undefined /*out*/;
            resourceInputs["agentId"] = undefined /*out*/;
            resourceInputs["approved"] = undefined /*out*/;
            resourceInputs["containerId"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["setNewPasswordAllowed"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["serverPassword", "storePassword"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(CertificateStore.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CertificateStore resources.
 */
export interface CertificateStoreState {
    /**
     * Bool indicating if there is an orchestrator assigned to the new certificate store.
     */
    agentAssigned?: pulumi.Input<boolean>;
    /**
     * String indicating the Keyfactor Command GUID of the orchestrator for the created store.
     */
    agentId?: pulumi.Input<string>;
    /**
     * Can be either ClientMachine or the Keyfactor Command GUID of the orchestrator to use for managing the certificate store.
     * The agent must support the certificate store type and be approved.
     */
    agentIdentifier?: pulumi.Input<string>;
    /**
     * Bool that indicates the approval status of store. Unapproved stores come from store Discovery and cannot be used for
     * certificate operations.
     */
    approved?: pulumi.Input<boolean>;
    /**
     * Client machine name; value depends on certificate store type. See API reference guide and/or store type documentation.
     */
    clientMachine?: pulumi.Input<string>;
    /**
     * Container identifier of the store's associated certificate store container.
     */
    containerId?: pulumi.Input<number>;
    /**
     * Name of the container you want to associate the certificate store with. NOTE: The container must already exist and be of
     * the same certificate store type.
     */
    containerName?: pulumi.Input<string>;
    /**
     * Determines whether the store create job will be scheduled. WARNING: If set to TRUE, each apply will trigger a store
     * create job, if the store type support Create. This may cause issues if the store already exists but will depend on the
     * store type.
     */
    createIfMissing?: pulumi.Input<boolean>;
    /**
     * Display name of the certificate store. Is the concatenation of 'ClientMachine - StorePath'.
     */
    displayName?: pulumi.Input<string>;
    /**
     * String indicating the schedule for inventory updates. Valid formats are: "immediate" - schedules and immediate job "1d"
     * - schedules a daily job "12h" - schedules a job every 12 hours "30m" - schedules a job every 30 minutes
     */
    inventorySchedule?: pulumi.Input<string>;
    /**
     * Certificate properties specific to certificate store type configured as key-value pairs. NOTE: Special properties
     * 'ServerUsername' and 'ServerPassword' are required for some store types and should not be declared in this attribute and
     * have their own dedicated values. See store type documentation for more information.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The password to access the host of the certificate store. In Keyfactor Command this is the 'ServerUsername' field found
     * in the store type 'Properties'. Whether this is required and what format will vary based on store type definitions,
     * please review the store type documentation for more information.
     */
    serverPassword?: pulumi.Input<string>;
    /**
     * Indicates whether the certificate store host requires SSL. In Keyfactor Command this is the 'ServerUseSsl' field found
     * in the store type 'Properties'. Whether this is required and what format will vary based on store type definitions,
     * please review the store type documentation for more information.
     */
    serverUseSsl?: pulumi.Input<boolean>;
    /**
     * The username to access the host of the certificate store. In Keyfactor Command this is the 'ServerUsername' field found
     * in the store type 'Properties'. Whether this is required and what format will vary based on store type definitions,
     * please review the store type documentation for more information.
     */
    serverUsername?: pulumi.Input<string>;
    /**
     * Indicates whether the store password can be changed.
     */
    setNewPasswordAllowed?: pulumi.Input<boolean>;
    /**
     * The password to access the contents of the certificate store. In Keyfactor Command this is the 'StorePassword' field.
     * field found in the store type 'Properties'. Whether this is required and what format will vary based on store type
     * definitions, please review the store type documentation for more information.
     */
    storePassword?: pulumi.Input<string>;
    /**
     * Path to the new certificate store on a target. Format varies depending on store type see the store type documentation
     * for more information.
     */
    storePath?: pulumi.Input<string>;
    /**
     * Short name of certificate store type.
     */
    storeType?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CertificateStore resource.
 */
export interface CertificateStoreArgs {
    /**
     * Can be either ClientMachine or the Keyfactor Command GUID of the orchestrator to use for managing the certificate store.
     * The agent must support the certificate store type and be approved.
     */
    agentIdentifier: pulumi.Input<string>;
    /**
     * Client machine name; value depends on certificate store type. See API reference guide and/or store type documentation.
     */
    clientMachine: pulumi.Input<string>;
    /**
     * Name of the container you want to associate the certificate store with. NOTE: The container must already exist and be of
     * the same certificate store type.
     */
    containerName?: pulumi.Input<string>;
    /**
     * Determines whether the store create job will be scheduled. WARNING: If set to TRUE, each apply will trigger a store
     * create job, if the store type support Create. This may cause issues if the store already exists but will depend on the
     * store type.
     */
    createIfMissing?: pulumi.Input<boolean>;
    /**
     * String indicating the schedule for inventory updates. Valid formats are: "immediate" - schedules and immediate job "1d"
     * - schedules a daily job "12h" - schedules a job every 12 hours "30m" - schedules a job every 30 minutes
     */
    inventorySchedule?: pulumi.Input<string>;
    /**
     * Certificate properties specific to certificate store type configured as key-value pairs. NOTE: Special properties
     * 'ServerUsername' and 'ServerPassword' are required for some store types and should not be declared in this attribute and
     * have their own dedicated values. See store type documentation for more information.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The password to access the host of the certificate store. In Keyfactor Command this is the 'ServerUsername' field found
     * in the store type 'Properties'. Whether this is required and what format will vary based on store type definitions,
     * please review the store type documentation for more information.
     */
    serverPassword?: pulumi.Input<string>;
    /**
     * Indicates whether the certificate store host requires SSL. In Keyfactor Command this is the 'ServerUseSsl' field found
     * in the store type 'Properties'. Whether this is required and what format will vary based on store type definitions,
     * please review the store type documentation for more information.
     */
    serverUseSsl?: pulumi.Input<boolean>;
    /**
     * The username to access the host of the certificate store. In Keyfactor Command this is the 'ServerUsername' field found
     * in the store type 'Properties'. Whether this is required and what format will vary based on store type definitions,
     * please review the store type documentation for more information.
     */
    serverUsername?: pulumi.Input<string>;
    /**
     * The password to access the contents of the certificate store. In Keyfactor Command this is the 'StorePassword' field.
     * field found in the store type 'Properties'. Whether this is required and what format will vary based on store type
     * definitions, please review the store type documentation for more information.
     */
    storePassword?: pulumi.Input<string>;
    /**
     * Path to the new certificate store on a target. Format varies depending on store type see the store type documentation
     * for more information.
     */
    storePath: pulumi.Input<string>;
    /**
     * Short name of certificate store type.
     */
    storeType: pulumi.Input<string>;
}
