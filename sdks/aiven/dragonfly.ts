// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Dragonfly extends pulumi.CustomResource {
    /**
     * Get an existing Dragonfly resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DragonflyState, opts?: pulumi.CustomResourceOptions): Dragonfly {
        return new Dragonfly(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aiven:index/dragonfly:Dragonfly';

    /**
     * Returns true if the given object is an instance of Dragonfly.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Dragonfly {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Dragonfly.__pulumiType;
    }

    /**
     * Add [disk storage](https://aiven.io/docs/platform/howto/add-storage-space) in increments of 30 GiB to scale your
     * service. The maximum value depends on the service type and cloud provider. Removing additional storage causes the
     * service nodes to go through a rolling restart and there might be a short downtime for services with no HA capabilities.
     */
    public readonly additionalDiskSpace!: pulumi.Output<string | undefined>;
    /**
     * Defines where the cloud provider and region where the service is hosted in. This can be changed freely after service is
     * created. Changing the value will trigger a potentially lengthy migration process for the service. Format is cloud
     * provider name (`aws`, `azure`, `do` `google`, `upcloud`, etc.), dash, and the cloud provider specific region name. These
     * are documented on each Cloud provider's own support articles, like [here for
     * Google](https://cloud.google.com/compute/docs/regions-zones/) and [here for
     * AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html).
     */
    public readonly cloudName!: pulumi.Output<string | undefined>;
    /**
     * Service component information objects
     */
    public /*out*/ readonly components!: pulumi.Output<outputs.DragonflyComponent[]>;
    /**
     * Service disk space. Possible values depend on the service type, the cloud provider and the project. Therefore, reducing
     * will result in the service rebalancing.
     *
     * @deprecated Deprecated
     */
    public readonly diskSpace!: pulumi.Output<string | undefined>;
    /**
     * The maximum disk space of the service, possible values depend on the service type, the cloud provider and the project.
     */
    public /*out*/ readonly diskSpaceCap!: pulumi.Output<string>;
    /**
     * The default disk space of the service, possible values depend on the service type, the cloud provider and the project.
     * Its also the minimum value for `disk_space`
     */
    public /*out*/ readonly diskSpaceDefault!: pulumi.Output<string>;
    /**
     * The default disk space step of the service, possible values depend on the service type, the cloud provider and the
     * project. `disk_space` needs to increment from `disk_space_default` by increments of this size.
     */
    public /*out*/ readonly diskSpaceStep!: pulumi.Output<string>;
    /**
     * Disk space that service is currently using
     */
    public /*out*/ readonly diskSpaceUsed!: pulumi.Output<string>;
    /**
     * Dragonfly server provided values
     */
    public readonly dragonfly!: pulumi.Output<outputs.DragonflyDragonfly | undefined>;
    /**
     * Dragonfly user configurable settings
     */
    public readonly dragonflyUserConfig!: pulumi.Output<outputs.DragonflyDragonflyUserConfig | undefined>;
    /**
     * Day of week when maintenance operations should be performed. One monday, tuesday, wednesday, etc.
     */
    public readonly maintenanceWindowDow!: pulumi.Output<string | undefined>;
    /**
     * Time of day when maintenance operations should be performed. UTC time in HH:mm:ss format.
     */
    public readonly maintenanceWindowTime!: pulumi.Output<string | undefined>;
    /**
     * Defines what kind of computing resources are allocated for the service. It can be changed after creation, though there
     * are some restrictions when going to a smaller plan such as the new plan must have sufficient amount of disk space to
     * store all current data and switching to a plan with fewer nodes might not be supported. The basic plan names are
     * `hobbyist`, `startup-x`, `business-x` and `premium-x` where `x` is (roughly) the amount of memory on each node (also
     * other attributes like number of CPUs and amount of disk space varies but naming is based on memory). The available
     * options can be seem from the [Aiven pricing page](https://aiven.io/pricing).
     */
    public readonly plan!: pulumi.Output<string>;
    /**
     * The name of the project this resource belongs to. To set up proper dependencies please refer to this variable as a
     * reference. Changing this property forces recreation of the resource.
     */
    public readonly project!: pulumi.Output<string>;
    /**
     * Specifies the VPC the service should run in. If the value is not set the service is not run inside a VPC. When set, the
     * value should be given as a reference to set up dependencies correctly and the VPC must be in the same cloud and region
     * as the service itself. Project can be freely moved to and from VPC after creation but doing so triggers migration to new
     * servers so the operation can take significant amount of time to complete if the service has a lot of data.
     */
    public readonly projectVpcId!: pulumi.Output<string | undefined>;
    /**
     * The hostname of the service.
     */
    public /*out*/ readonly serviceHost!: pulumi.Output<string>;
    /**
     * Service integrations to specify when creating a service. Not applied after initial service creation
     */
    public readonly serviceIntegrations!: pulumi.Output<outputs.DragonflyServiceIntegration[] | undefined>;
    /**
     * Specifies the actual name of the service. The name cannot be changed later without destroying and re-creating the
     * service so name should be picked based on intended service usage rather than current attributes.
     */
    public readonly serviceName!: pulumi.Output<string>;
    /**
     * Password used for connecting to the service, if applicable
     */
    public /*out*/ readonly servicePassword!: pulumi.Output<string>;
    /**
     * The port of the service
     */
    public /*out*/ readonly servicePort!: pulumi.Output<number>;
    /**
     * Aiven internal service type code
     */
    public /*out*/ readonly serviceType!: pulumi.Output<string>;
    /**
     * URI for connecting to the service. Service specific info is under "kafka", "pg", etc.
     */
    public /*out*/ readonly serviceUri!: pulumi.Output<string>;
    /**
     * Username used for connecting to the service, if applicable
     */
    public /*out*/ readonly serviceUsername!: pulumi.Output<string>;
    /**
     * Service state. One of `POWEROFF`, `REBALANCING`, `REBUILDING` or `RUNNING`
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Static IPs that are going to be associated with this service. Please assign a value using the 'toset' function. Once a
     * static ip resource is in the 'assigned' state it cannot be unbound from the node again
     */
    public readonly staticIps!: pulumi.Output<string[] | undefined>;
    /**
     * Tags are key-value pairs that allow you to categorize services.
     */
    public readonly tags!: pulumi.Output<outputs.DragonflyTag[] | undefined>;
    /**
     * The email addresses for [service contacts](https://aiven.io/docs/platform/howto/technical-emails), who will receive
     * important alerts and updates about this service. You can also set email contacts at the project level.
     */
    public readonly techEmails!: pulumi.Output<outputs.DragonflyTechEmail[] | undefined>;
    /**
     * Prevents the service from being deleted. It is recommended to set this to `true` for all production services to prevent
     * unintentional service deletion. This does not shield against deleting databases or topics but for services with backups
     * much of the content can at least be restored from backup in case accidental deletion is done.
     */
    public readonly terminationProtection!: pulumi.Output<boolean | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.DragonflyTimeouts | undefined>;

    /**
     * Create a Dragonfly resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DragonflyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DragonflyArgs | DragonflyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DragonflyState | undefined;
            resourceInputs["additionalDiskSpace"] = state ? state.additionalDiskSpace : undefined;
            resourceInputs["cloudName"] = state ? state.cloudName : undefined;
            resourceInputs["components"] = state ? state.components : undefined;
            resourceInputs["diskSpace"] = state ? state.diskSpace : undefined;
            resourceInputs["diskSpaceCap"] = state ? state.diskSpaceCap : undefined;
            resourceInputs["diskSpaceDefault"] = state ? state.diskSpaceDefault : undefined;
            resourceInputs["diskSpaceStep"] = state ? state.diskSpaceStep : undefined;
            resourceInputs["diskSpaceUsed"] = state ? state.diskSpaceUsed : undefined;
            resourceInputs["dragonfly"] = state ? state.dragonfly : undefined;
            resourceInputs["dragonflyUserConfig"] = state ? state.dragonflyUserConfig : undefined;
            resourceInputs["maintenanceWindowDow"] = state ? state.maintenanceWindowDow : undefined;
            resourceInputs["maintenanceWindowTime"] = state ? state.maintenanceWindowTime : undefined;
            resourceInputs["plan"] = state ? state.plan : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["projectVpcId"] = state ? state.projectVpcId : undefined;
            resourceInputs["serviceHost"] = state ? state.serviceHost : undefined;
            resourceInputs["serviceIntegrations"] = state ? state.serviceIntegrations : undefined;
            resourceInputs["serviceName"] = state ? state.serviceName : undefined;
            resourceInputs["servicePassword"] = state ? state.servicePassword : undefined;
            resourceInputs["servicePort"] = state ? state.servicePort : undefined;
            resourceInputs["serviceType"] = state ? state.serviceType : undefined;
            resourceInputs["serviceUri"] = state ? state.serviceUri : undefined;
            resourceInputs["serviceUsername"] = state ? state.serviceUsername : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["staticIps"] = state ? state.staticIps : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["techEmails"] = state ? state.techEmails : undefined;
            resourceInputs["terminationProtection"] = state ? state.terminationProtection : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as DragonflyArgs | undefined;
            if ((!args || args.plan === undefined) && !opts.urn) {
                throw new Error("Missing required property 'plan'");
            }
            if ((!args || args.project === undefined) && !opts.urn) {
                throw new Error("Missing required property 'project'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["additionalDiskSpace"] = args ? args.additionalDiskSpace : undefined;
            resourceInputs["cloudName"] = args ? args.cloudName : undefined;
            resourceInputs["diskSpace"] = args ? args.diskSpace : undefined;
            resourceInputs["dragonfly"] = args ? args.dragonfly : undefined;
            resourceInputs["dragonflyUserConfig"] = args ? args.dragonflyUserConfig : undefined;
            resourceInputs["maintenanceWindowDow"] = args ? args.maintenanceWindowDow : undefined;
            resourceInputs["maintenanceWindowTime"] = args ? args.maintenanceWindowTime : undefined;
            resourceInputs["plan"] = args ? args.plan : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["projectVpcId"] = args ? args.projectVpcId : undefined;
            resourceInputs["serviceIntegrations"] = args ? args.serviceIntegrations : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["staticIps"] = args ? args.staticIps : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["techEmails"] = args ? args.techEmails : undefined;
            resourceInputs["terminationProtection"] = args ? args.terminationProtection : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["components"] = undefined /*out*/;
            resourceInputs["diskSpaceCap"] = undefined /*out*/;
            resourceInputs["diskSpaceDefault"] = undefined /*out*/;
            resourceInputs["diskSpaceStep"] = undefined /*out*/;
            resourceInputs["diskSpaceUsed"] = undefined /*out*/;
            resourceInputs["serviceHost"] = undefined /*out*/;
            resourceInputs["servicePassword"] = undefined /*out*/;
            resourceInputs["servicePort"] = undefined /*out*/;
            resourceInputs["serviceType"] = undefined /*out*/;
            resourceInputs["serviceUri"] = undefined /*out*/;
            resourceInputs["serviceUsername"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["servicePassword", "serviceUri"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Dragonfly.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Dragonfly resources.
 */
export interface DragonflyState {
    /**
     * Add [disk storage](https://aiven.io/docs/platform/howto/add-storage-space) in increments of 30 GiB to scale your
     * service. The maximum value depends on the service type and cloud provider. Removing additional storage causes the
     * service nodes to go through a rolling restart and there might be a short downtime for services with no HA capabilities.
     */
    additionalDiskSpace?: pulumi.Input<string>;
    /**
     * Defines where the cloud provider and region where the service is hosted in. This can be changed freely after service is
     * created. Changing the value will trigger a potentially lengthy migration process for the service. Format is cloud
     * provider name (`aws`, `azure`, `do` `google`, `upcloud`, etc.), dash, and the cloud provider specific region name. These
     * are documented on each Cloud provider's own support articles, like [here for
     * Google](https://cloud.google.com/compute/docs/regions-zones/) and [here for
     * AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html).
     */
    cloudName?: pulumi.Input<string>;
    /**
     * Service component information objects
     */
    components?: pulumi.Input<pulumi.Input<inputs.DragonflyComponent>[]>;
    /**
     * Service disk space. Possible values depend on the service type, the cloud provider and the project. Therefore, reducing
     * will result in the service rebalancing.
     *
     * @deprecated Deprecated
     */
    diskSpace?: pulumi.Input<string>;
    /**
     * The maximum disk space of the service, possible values depend on the service type, the cloud provider and the project.
     */
    diskSpaceCap?: pulumi.Input<string>;
    /**
     * The default disk space of the service, possible values depend on the service type, the cloud provider and the project.
     * Its also the minimum value for `disk_space`
     */
    diskSpaceDefault?: pulumi.Input<string>;
    /**
     * The default disk space step of the service, possible values depend on the service type, the cloud provider and the
     * project. `disk_space` needs to increment from `disk_space_default` by increments of this size.
     */
    diskSpaceStep?: pulumi.Input<string>;
    /**
     * Disk space that service is currently using
     */
    diskSpaceUsed?: pulumi.Input<string>;
    /**
     * Dragonfly server provided values
     */
    dragonfly?: pulumi.Input<inputs.DragonflyDragonfly>;
    /**
     * Dragonfly user configurable settings
     */
    dragonflyUserConfig?: pulumi.Input<inputs.DragonflyDragonflyUserConfig>;
    /**
     * Day of week when maintenance operations should be performed. One monday, tuesday, wednesday, etc.
     */
    maintenanceWindowDow?: pulumi.Input<string>;
    /**
     * Time of day when maintenance operations should be performed. UTC time in HH:mm:ss format.
     */
    maintenanceWindowTime?: pulumi.Input<string>;
    /**
     * Defines what kind of computing resources are allocated for the service. It can be changed after creation, though there
     * are some restrictions when going to a smaller plan such as the new plan must have sufficient amount of disk space to
     * store all current data and switching to a plan with fewer nodes might not be supported. The basic plan names are
     * `hobbyist`, `startup-x`, `business-x` and `premium-x` where `x` is (roughly) the amount of memory on each node (also
     * other attributes like number of CPUs and amount of disk space varies but naming is based on memory). The available
     * options can be seem from the [Aiven pricing page](https://aiven.io/pricing).
     */
    plan?: pulumi.Input<string>;
    /**
     * The name of the project this resource belongs to. To set up proper dependencies please refer to this variable as a
     * reference. Changing this property forces recreation of the resource.
     */
    project?: pulumi.Input<string>;
    /**
     * Specifies the VPC the service should run in. If the value is not set the service is not run inside a VPC. When set, the
     * value should be given as a reference to set up dependencies correctly and the VPC must be in the same cloud and region
     * as the service itself. Project can be freely moved to and from VPC after creation but doing so triggers migration to new
     * servers so the operation can take significant amount of time to complete if the service has a lot of data.
     */
    projectVpcId?: pulumi.Input<string>;
    /**
     * The hostname of the service.
     */
    serviceHost?: pulumi.Input<string>;
    /**
     * Service integrations to specify when creating a service. Not applied after initial service creation
     */
    serviceIntegrations?: pulumi.Input<pulumi.Input<inputs.DragonflyServiceIntegration>[]>;
    /**
     * Specifies the actual name of the service. The name cannot be changed later without destroying and re-creating the
     * service so name should be picked based on intended service usage rather than current attributes.
     */
    serviceName?: pulumi.Input<string>;
    /**
     * Password used for connecting to the service, if applicable
     */
    servicePassword?: pulumi.Input<string>;
    /**
     * The port of the service
     */
    servicePort?: pulumi.Input<number>;
    /**
     * Aiven internal service type code
     */
    serviceType?: pulumi.Input<string>;
    /**
     * URI for connecting to the service. Service specific info is under "kafka", "pg", etc.
     */
    serviceUri?: pulumi.Input<string>;
    /**
     * Username used for connecting to the service, if applicable
     */
    serviceUsername?: pulumi.Input<string>;
    /**
     * Service state. One of `POWEROFF`, `REBALANCING`, `REBUILDING` or `RUNNING`
     */
    state?: pulumi.Input<string>;
    /**
     * Static IPs that are going to be associated with this service. Please assign a value using the 'toset' function. Once a
     * static ip resource is in the 'assigned' state it cannot be unbound from the node again
     */
    staticIps?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Tags are key-value pairs that allow you to categorize services.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.DragonflyTag>[]>;
    /**
     * The email addresses for [service contacts](https://aiven.io/docs/platform/howto/technical-emails), who will receive
     * important alerts and updates about this service. You can also set email contacts at the project level.
     */
    techEmails?: pulumi.Input<pulumi.Input<inputs.DragonflyTechEmail>[]>;
    /**
     * Prevents the service from being deleted. It is recommended to set this to `true` for all production services to prevent
     * unintentional service deletion. This does not shield against deleting databases or topics but for services with backups
     * much of the content can at least be restored from backup in case accidental deletion is done.
     */
    terminationProtection?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.DragonflyTimeouts>;
}

/**
 * The set of arguments for constructing a Dragonfly resource.
 */
export interface DragonflyArgs {
    /**
     * Add [disk storage](https://aiven.io/docs/platform/howto/add-storage-space) in increments of 30 GiB to scale your
     * service. The maximum value depends on the service type and cloud provider. Removing additional storage causes the
     * service nodes to go through a rolling restart and there might be a short downtime for services with no HA capabilities.
     */
    additionalDiskSpace?: pulumi.Input<string>;
    /**
     * Defines where the cloud provider and region where the service is hosted in. This can be changed freely after service is
     * created. Changing the value will trigger a potentially lengthy migration process for the service. Format is cloud
     * provider name (`aws`, `azure`, `do` `google`, `upcloud`, etc.), dash, and the cloud provider specific region name. These
     * are documented on each Cloud provider's own support articles, like [here for
     * Google](https://cloud.google.com/compute/docs/regions-zones/) and [here for
     * AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html).
     */
    cloudName?: pulumi.Input<string>;
    /**
     * Service disk space. Possible values depend on the service type, the cloud provider and the project. Therefore, reducing
     * will result in the service rebalancing.
     *
     * @deprecated Deprecated
     */
    diskSpace?: pulumi.Input<string>;
    /**
     * Dragonfly server provided values
     */
    dragonfly?: pulumi.Input<inputs.DragonflyDragonfly>;
    /**
     * Dragonfly user configurable settings
     */
    dragonflyUserConfig?: pulumi.Input<inputs.DragonflyDragonflyUserConfig>;
    /**
     * Day of week when maintenance operations should be performed. One monday, tuesday, wednesday, etc.
     */
    maintenanceWindowDow?: pulumi.Input<string>;
    /**
     * Time of day when maintenance operations should be performed. UTC time in HH:mm:ss format.
     */
    maintenanceWindowTime?: pulumi.Input<string>;
    /**
     * Defines what kind of computing resources are allocated for the service. It can be changed after creation, though there
     * are some restrictions when going to a smaller plan such as the new plan must have sufficient amount of disk space to
     * store all current data and switching to a plan with fewer nodes might not be supported. The basic plan names are
     * `hobbyist`, `startup-x`, `business-x` and `premium-x` where `x` is (roughly) the amount of memory on each node (also
     * other attributes like number of CPUs and amount of disk space varies but naming is based on memory). The available
     * options can be seem from the [Aiven pricing page](https://aiven.io/pricing).
     */
    plan: pulumi.Input<string>;
    /**
     * The name of the project this resource belongs to. To set up proper dependencies please refer to this variable as a
     * reference. Changing this property forces recreation of the resource.
     */
    project: pulumi.Input<string>;
    /**
     * Specifies the VPC the service should run in. If the value is not set the service is not run inside a VPC. When set, the
     * value should be given as a reference to set up dependencies correctly and the VPC must be in the same cloud and region
     * as the service itself. Project can be freely moved to and from VPC after creation but doing so triggers migration to new
     * servers so the operation can take significant amount of time to complete if the service has a lot of data.
     */
    projectVpcId?: pulumi.Input<string>;
    /**
     * Service integrations to specify when creating a service. Not applied after initial service creation
     */
    serviceIntegrations?: pulumi.Input<pulumi.Input<inputs.DragonflyServiceIntegration>[]>;
    /**
     * Specifies the actual name of the service. The name cannot be changed later without destroying and re-creating the
     * service so name should be picked based on intended service usage rather than current attributes.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Static IPs that are going to be associated with this service. Please assign a value using the 'toset' function. Once a
     * static ip resource is in the 'assigned' state it cannot be unbound from the node again
     */
    staticIps?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Tags are key-value pairs that allow you to categorize services.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.DragonflyTag>[]>;
    /**
     * The email addresses for [service contacts](https://aiven.io/docs/platform/howto/technical-emails), who will receive
     * important alerts and updates about this service. You can also set email contacts at the project level.
     */
    techEmails?: pulumi.Input<pulumi.Input<inputs.DragonflyTechEmail>[]>;
    /**
     * Prevents the service from being deleted. It is recommended to set this to `true` for all production services to prevent
     * unintentional service deletion. This does not shield against deleting databases or topics but for services with backups
     * much of the content can at least be restored from backup in case accidental deletion is done.
     */
    terminationProtection?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.DragonflyTimeouts>;
}
