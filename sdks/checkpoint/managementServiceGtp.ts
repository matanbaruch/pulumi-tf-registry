// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ManagementServiceGtp extends pulumi.CustomResource {
    /**
     * Get an existing ManagementServiceGtp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ManagementServiceGtpState, opts?: pulumi.CustomResourceOptions): ManagementServiceGtp {
        return new ManagementServiceGtp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'checkpoint:index/managementServiceGtp:ManagementServiceGtp';

    /**
     * Returns true if the given object is an instance of ManagementServiceGtp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagementServiceGtp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagementServiceGtp.__pulumiType;
    }

    /**
     * Match by Access Point Name.
     */
    public readonly accessPointName!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Allow usage of static IP addresses.
     */
    public readonly allowUsageOfStaticIp!: pulumi.Output<boolean | undefined>;
    /**
     * Apply Access Policy on user traffic.
     */
    public readonly applyAccessPolicyOnUserTraffic!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Color of the object. Should be one of existing colors.
     */
    public readonly color!: pulumi.Output<string | undefined>;
    /**
     * Comments string.
     */
    public readonly comments!: pulumi.Output<string | undefined>;
    /**
     * CS Fallback and SRVCC (Relevant for V2 only).
     */
    public readonly csFallbackAndSrvcc!: pulumi.Output<boolean | undefined>;
    /**
     * Collection of group identifiers.
     */
    public readonly groups!: pulumi.Output<string[] | undefined>;
    /**
     * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted -
     * warnings will also be ignored.
     */
    public readonly ignoreErrors!: pulumi.Output<boolean | undefined>;
    /**
     * Apply changes ignoring warnings.
     */
    public readonly ignoreWarnings!: pulumi.Output<boolean | undefined>;
    /**
     * Match by IMSI prefix.
     */
    public readonly imsiPrefix!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Match only message types relevant to the given GTP interface. Relevant only for GTP V1 or V2.
     */
    public readonly interfaceProfile!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Match by an LDAP Group.
     */
    public readonly ldapGroup!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Match by an MS-ISDN.
     */
    public readonly msIsdn!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Object name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Match by Radio Access Technology.
     */
    public readonly radioAccessTechnology!: pulumi.Output<outputs.ManagementServiceGtpRadioAccessTechnology | undefined>;
    /**
     * Restoration and Recovery (Relevant for V2 only).
     */
    public readonly restorationAndRecovery!: pulumi.Output<boolean | undefined>;
    /**
     * Accept PDUs from the GGSN/PGW to the SGSN/SGW on a previously established PDP context, even if different ports are used.
     */
    public readonly reverseService!: pulumi.Output<boolean | undefined>;
    /**
     * Match by a selection mode.
     */
    public readonly selectionMode!: pulumi.Output<outputs.ManagementServiceGtpSelectionMode | undefined>;
    /**
     * Collection of tag identifiers.
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    /**
     * Trace Management (Relevant for V2 only).
     */
    public readonly traceManagement!: pulumi.Output<boolean | undefined>;
    /**
     * GTP version.
     */
    public readonly version!: pulumi.Output<string | undefined>;

    /**
     * Create a ManagementServiceGtp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ManagementServiceGtpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ManagementServiceGtpArgs | ManagementServiceGtpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ManagementServiceGtpState | undefined;
            resourceInputs["accessPointName"] = state ? state.accessPointName : undefined;
            resourceInputs["allowUsageOfStaticIp"] = state ? state.allowUsageOfStaticIp : undefined;
            resourceInputs["applyAccessPolicyOnUserTraffic"] = state ? state.applyAccessPolicyOnUserTraffic : undefined;
            resourceInputs["color"] = state ? state.color : undefined;
            resourceInputs["comments"] = state ? state.comments : undefined;
            resourceInputs["csFallbackAndSrvcc"] = state ? state.csFallbackAndSrvcc : undefined;
            resourceInputs["groups"] = state ? state.groups : undefined;
            resourceInputs["ignoreErrors"] = state ? state.ignoreErrors : undefined;
            resourceInputs["ignoreWarnings"] = state ? state.ignoreWarnings : undefined;
            resourceInputs["imsiPrefix"] = state ? state.imsiPrefix : undefined;
            resourceInputs["interfaceProfile"] = state ? state.interfaceProfile : undefined;
            resourceInputs["ldapGroup"] = state ? state.ldapGroup : undefined;
            resourceInputs["msIsdn"] = state ? state.msIsdn : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["radioAccessTechnology"] = state ? state.radioAccessTechnology : undefined;
            resourceInputs["restorationAndRecovery"] = state ? state.restorationAndRecovery : undefined;
            resourceInputs["reverseService"] = state ? state.reverseService : undefined;
            resourceInputs["selectionMode"] = state ? state.selectionMode : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["traceManagement"] = state ? state.traceManagement : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as ManagementServiceGtpArgs | undefined;
            resourceInputs["accessPointName"] = args ? args.accessPointName : undefined;
            resourceInputs["allowUsageOfStaticIp"] = args ? args.allowUsageOfStaticIp : undefined;
            resourceInputs["applyAccessPolicyOnUserTraffic"] = args ? args.applyAccessPolicyOnUserTraffic : undefined;
            resourceInputs["color"] = args ? args.color : undefined;
            resourceInputs["comments"] = args ? args.comments : undefined;
            resourceInputs["csFallbackAndSrvcc"] = args ? args.csFallbackAndSrvcc : undefined;
            resourceInputs["groups"] = args ? args.groups : undefined;
            resourceInputs["ignoreErrors"] = args ? args.ignoreErrors : undefined;
            resourceInputs["ignoreWarnings"] = args ? args.ignoreWarnings : undefined;
            resourceInputs["imsiPrefix"] = args ? args.imsiPrefix : undefined;
            resourceInputs["interfaceProfile"] = args ? args.interfaceProfile : undefined;
            resourceInputs["ldapGroup"] = args ? args.ldapGroup : undefined;
            resourceInputs["msIsdn"] = args ? args.msIsdn : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["radioAccessTechnology"] = args ? args.radioAccessTechnology : undefined;
            resourceInputs["restorationAndRecovery"] = args ? args.restorationAndRecovery : undefined;
            resourceInputs["reverseService"] = args ? args.reverseService : undefined;
            resourceInputs["selectionMode"] = args ? args.selectionMode : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["traceManagement"] = args ? args.traceManagement : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ManagementServiceGtp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ManagementServiceGtp resources.
 */
export interface ManagementServiceGtpState {
    /**
     * Match by Access Point Name.
     */
    accessPointName?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Allow usage of static IP addresses.
     */
    allowUsageOfStaticIp?: pulumi.Input<boolean>;
    /**
     * Apply Access Policy on user traffic.
     */
    applyAccessPolicyOnUserTraffic?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Color of the object. Should be one of existing colors.
     */
    color?: pulumi.Input<string>;
    /**
     * Comments string.
     */
    comments?: pulumi.Input<string>;
    /**
     * CS Fallback and SRVCC (Relevant for V2 only).
     */
    csFallbackAndSrvcc?: pulumi.Input<boolean>;
    /**
     * Collection of group identifiers.
     */
    groups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted -
     * warnings will also be ignored.
     */
    ignoreErrors?: pulumi.Input<boolean>;
    /**
     * Apply changes ignoring warnings.
     */
    ignoreWarnings?: pulumi.Input<boolean>;
    /**
     * Match by IMSI prefix.
     */
    imsiPrefix?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Match only message types relevant to the given GTP interface. Relevant only for GTP V1 or V2.
     */
    interfaceProfile?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Match by an LDAP Group.
     */
    ldapGroup?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Match by an MS-ISDN.
     */
    msIsdn?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Object name.
     */
    name?: pulumi.Input<string>;
    /**
     * Match by Radio Access Technology.
     */
    radioAccessTechnology?: pulumi.Input<inputs.ManagementServiceGtpRadioAccessTechnology>;
    /**
     * Restoration and Recovery (Relevant for V2 only).
     */
    restorationAndRecovery?: pulumi.Input<boolean>;
    /**
     * Accept PDUs from the GGSN/PGW to the SGSN/SGW on a previously established PDP context, even if different ports are used.
     */
    reverseService?: pulumi.Input<boolean>;
    /**
     * Match by a selection mode.
     */
    selectionMode?: pulumi.Input<inputs.ManagementServiceGtpSelectionMode>;
    /**
     * Collection of tag identifiers.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Trace Management (Relevant for V2 only).
     */
    traceManagement?: pulumi.Input<boolean>;
    /**
     * GTP version.
     */
    version?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ManagementServiceGtp resource.
 */
export interface ManagementServiceGtpArgs {
    /**
     * Match by Access Point Name.
     */
    accessPointName?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Allow usage of static IP addresses.
     */
    allowUsageOfStaticIp?: pulumi.Input<boolean>;
    /**
     * Apply Access Policy on user traffic.
     */
    applyAccessPolicyOnUserTraffic?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Color of the object. Should be one of existing colors.
     */
    color?: pulumi.Input<string>;
    /**
     * Comments string.
     */
    comments?: pulumi.Input<string>;
    /**
     * CS Fallback and SRVCC (Relevant for V2 only).
     */
    csFallbackAndSrvcc?: pulumi.Input<boolean>;
    /**
     * Collection of group identifiers.
     */
    groups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted -
     * warnings will also be ignored.
     */
    ignoreErrors?: pulumi.Input<boolean>;
    /**
     * Apply changes ignoring warnings.
     */
    ignoreWarnings?: pulumi.Input<boolean>;
    /**
     * Match by IMSI prefix.
     */
    imsiPrefix?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Match only message types relevant to the given GTP interface. Relevant only for GTP V1 or V2.
     */
    interfaceProfile?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Match by an LDAP Group.
     */
    ldapGroup?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Match by an MS-ISDN.
     */
    msIsdn?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Object name.
     */
    name?: pulumi.Input<string>;
    /**
     * Match by Radio Access Technology.
     */
    radioAccessTechnology?: pulumi.Input<inputs.ManagementServiceGtpRadioAccessTechnology>;
    /**
     * Restoration and Recovery (Relevant for V2 only).
     */
    restorationAndRecovery?: pulumi.Input<boolean>;
    /**
     * Accept PDUs from the GGSN/PGW to the SGSN/SGW on a previously established PDP context, even if different ports are used.
     */
    reverseService?: pulumi.Input<boolean>;
    /**
     * Match by a selection mode.
     */
    selectionMode?: pulumi.Input<inputs.ManagementServiceGtpSelectionMode>;
    /**
     * Collection of tag identifiers.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Trace Management (Relevant for V2 only).
     */
    traceManagement?: pulumi.Input<boolean>;
    /**
     * GTP version.
     */
    version?: pulumi.Input<string>;
}
