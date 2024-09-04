// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemSettings extends pulumi.CustomResource {
    /**
     * Get an existing SystemSettings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemSettingsState, opts?: pulumi.CustomResourceOptions): SystemSettings {
        return new SystemSettings(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'netscalersdx:index/systemSettings:SystemSettings';

    /**
     * Returns true if the given object is an instance of SystemSettings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemSettings {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemSettings.__pulumiType;
    }

    /**
     * Authorize the DeviceAPIProxy request.
     */
    public readonly authorizeDeviceapiproxy!: pulumi.Output<boolean | undefined>;
    /**
     * Allow Basic Authentication Protocol.
     */
    public readonly basicauth!: pulumi.Output<boolean | undefined>;
    /**
     * Disable old password input requirement while changing ADM agent password.
     */
    public readonly disableAgentOldPasswordInput!: pulumi.Output<boolean | undefined>;
    /**
     * Disk utilization threshold after which data processing it stopped.
     */
    public readonly diskUtilizationThreshold!: pulumi.Output<number | undefined>;
    /**
     * Enable API Proxy Credentials.
     */
    public readonly enableApiproxyCredentials!: pulumi.Output<boolean | undefined>;
    /**
     * Enable Certificate Download.
     */
    public readonly enableCertificateDownload!: pulumi.Output<boolean | undefined>;
    /**
     * Used to enable/disable CUXIP(Customer User Experience Improvement Program).
     */
    public readonly enableCuxip!: pulumi.Output<boolean | undefined>;
    /**
     * Flag to enable/disable deleting interface from ADCs on SDX.
     */
    public readonly enableDeleteInterfaceOnAdc!: pulumi.Output<boolean | undefined>;
    /**
     * This setting enalbes nsrecover login for SVM.
     */
    public readonly enableNsrecoverLogin!: pulumi.Output<boolean | undefined>;
    /**
     * Enables session timeout feature.
     */
    public readonly enableSessionTimeout!: pulumi.Output<boolean | undefined>;
    /**
     * Enable Shell access for non-nsroot User(s).
     */
    public readonly enableShellAccess!: pulumi.Output<boolean | undefined>;
    /**
     * Enable Metering for NetScaler VPX on SDX.
     */
    public readonly isMeteringEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Count for number of NetScaler images to be saved in Agent.
     */
    public readonly keepAdcImageCount!: pulumi.Output<number | undefined>;
    /**
     * Agent web socket keep alive ping interval for the system.
     */
    public readonly keepAlivePingInterval!: pulumi.Output<number | undefined>;
    /**
     * Prompt Credentials for Stylebooks.
     */
    public readonly promptCredsForStylebooks!: pulumi.Output<boolean | undefined>;
    /**
     * Secure Access only.
     */
    public readonly secureAccessOnly!: pulumi.Output<boolean | undefined>;
    /**
     * Session timeout for the system.
     */
    public readonly sessionTimeout!: pulumi.Output<number | undefined>;
    /**
     * Session timeout unit for the system. Possible Values: [ Minutes, Hours ]
     */
    public readonly sessionTimeoutUnit!: pulumi.Output<string | undefined>;
    /**
     * Communication with Instances. Minimum length = 1 Maximum length = 10. Possible Values: [ http, https ]
     */
    public readonly svmNsComm!: pulumi.Output<string | undefined>;

    /**
     * Create a SystemSettings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemSettingsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemSettingsArgs | SystemSettingsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemSettingsState | undefined;
            resourceInputs["authorizeDeviceapiproxy"] = state ? state.authorizeDeviceapiproxy : undefined;
            resourceInputs["basicauth"] = state ? state.basicauth : undefined;
            resourceInputs["disableAgentOldPasswordInput"] = state ? state.disableAgentOldPasswordInput : undefined;
            resourceInputs["diskUtilizationThreshold"] = state ? state.diskUtilizationThreshold : undefined;
            resourceInputs["enableApiproxyCredentials"] = state ? state.enableApiproxyCredentials : undefined;
            resourceInputs["enableCertificateDownload"] = state ? state.enableCertificateDownload : undefined;
            resourceInputs["enableCuxip"] = state ? state.enableCuxip : undefined;
            resourceInputs["enableDeleteInterfaceOnAdc"] = state ? state.enableDeleteInterfaceOnAdc : undefined;
            resourceInputs["enableNsrecoverLogin"] = state ? state.enableNsrecoverLogin : undefined;
            resourceInputs["enableSessionTimeout"] = state ? state.enableSessionTimeout : undefined;
            resourceInputs["enableShellAccess"] = state ? state.enableShellAccess : undefined;
            resourceInputs["isMeteringEnabled"] = state ? state.isMeteringEnabled : undefined;
            resourceInputs["keepAdcImageCount"] = state ? state.keepAdcImageCount : undefined;
            resourceInputs["keepAlivePingInterval"] = state ? state.keepAlivePingInterval : undefined;
            resourceInputs["promptCredsForStylebooks"] = state ? state.promptCredsForStylebooks : undefined;
            resourceInputs["secureAccessOnly"] = state ? state.secureAccessOnly : undefined;
            resourceInputs["sessionTimeout"] = state ? state.sessionTimeout : undefined;
            resourceInputs["sessionTimeoutUnit"] = state ? state.sessionTimeoutUnit : undefined;
            resourceInputs["svmNsComm"] = state ? state.svmNsComm : undefined;
        } else {
            const args = argsOrState as SystemSettingsArgs | undefined;
            resourceInputs["authorizeDeviceapiproxy"] = args ? args.authorizeDeviceapiproxy : undefined;
            resourceInputs["basicauth"] = args ? args.basicauth : undefined;
            resourceInputs["disableAgentOldPasswordInput"] = args ? args.disableAgentOldPasswordInput : undefined;
            resourceInputs["diskUtilizationThreshold"] = args ? args.diskUtilizationThreshold : undefined;
            resourceInputs["enableApiproxyCredentials"] = args ? args.enableApiproxyCredentials : undefined;
            resourceInputs["enableCertificateDownload"] = args ? args.enableCertificateDownload : undefined;
            resourceInputs["enableCuxip"] = args ? args.enableCuxip : undefined;
            resourceInputs["enableDeleteInterfaceOnAdc"] = args ? args.enableDeleteInterfaceOnAdc : undefined;
            resourceInputs["enableNsrecoverLogin"] = args ? args.enableNsrecoverLogin : undefined;
            resourceInputs["enableSessionTimeout"] = args ? args.enableSessionTimeout : undefined;
            resourceInputs["enableShellAccess"] = args ? args.enableShellAccess : undefined;
            resourceInputs["isMeteringEnabled"] = args ? args.isMeteringEnabled : undefined;
            resourceInputs["keepAdcImageCount"] = args ? args.keepAdcImageCount : undefined;
            resourceInputs["keepAlivePingInterval"] = args ? args.keepAlivePingInterval : undefined;
            resourceInputs["promptCredsForStylebooks"] = args ? args.promptCredsForStylebooks : undefined;
            resourceInputs["secureAccessOnly"] = args ? args.secureAccessOnly : undefined;
            resourceInputs["sessionTimeout"] = args ? args.sessionTimeout : undefined;
            resourceInputs["sessionTimeoutUnit"] = args ? args.sessionTimeoutUnit : undefined;
            resourceInputs["svmNsComm"] = args ? args.svmNsComm : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemSettings.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemSettings resources.
 */
export interface SystemSettingsState {
    /**
     * Authorize the DeviceAPIProxy request.
     */
    authorizeDeviceapiproxy?: pulumi.Input<boolean>;
    /**
     * Allow Basic Authentication Protocol.
     */
    basicauth?: pulumi.Input<boolean>;
    /**
     * Disable old password input requirement while changing ADM agent password.
     */
    disableAgentOldPasswordInput?: pulumi.Input<boolean>;
    /**
     * Disk utilization threshold after which data processing it stopped.
     */
    diskUtilizationThreshold?: pulumi.Input<number>;
    /**
     * Enable API Proxy Credentials.
     */
    enableApiproxyCredentials?: pulumi.Input<boolean>;
    /**
     * Enable Certificate Download.
     */
    enableCertificateDownload?: pulumi.Input<boolean>;
    /**
     * Used to enable/disable CUXIP(Customer User Experience Improvement Program).
     */
    enableCuxip?: pulumi.Input<boolean>;
    /**
     * Flag to enable/disable deleting interface from ADCs on SDX.
     */
    enableDeleteInterfaceOnAdc?: pulumi.Input<boolean>;
    /**
     * This setting enalbes nsrecover login for SVM.
     */
    enableNsrecoverLogin?: pulumi.Input<boolean>;
    /**
     * Enables session timeout feature.
     */
    enableSessionTimeout?: pulumi.Input<boolean>;
    /**
     * Enable Shell access for non-nsroot User(s).
     */
    enableShellAccess?: pulumi.Input<boolean>;
    /**
     * Enable Metering for NetScaler VPX on SDX.
     */
    isMeteringEnabled?: pulumi.Input<boolean>;
    /**
     * Count for number of NetScaler images to be saved in Agent.
     */
    keepAdcImageCount?: pulumi.Input<number>;
    /**
     * Agent web socket keep alive ping interval for the system.
     */
    keepAlivePingInterval?: pulumi.Input<number>;
    /**
     * Prompt Credentials for Stylebooks.
     */
    promptCredsForStylebooks?: pulumi.Input<boolean>;
    /**
     * Secure Access only.
     */
    secureAccessOnly?: pulumi.Input<boolean>;
    /**
     * Session timeout for the system.
     */
    sessionTimeout?: pulumi.Input<number>;
    /**
     * Session timeout unit for the system. Possible Values: [ Minutes, Hours ]
     */
    sessionTimeoutUnit?: pulumi.Input<string>;
    /**
     * Communication with Instances. Minimum length = 1 Maximum length = 10. Possible Values: [ http, https ]
     */
    svmNsComm?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemSettings resource.
 */
export interface SystemSettingsArgs {
    /**
     * Authorize the DeviceAPIProxy request.
     */
    authorizeDeviceapiproxy?: pulumi.Input<boolean>;
    /**
     * Allow Basic Authentication Protocol.
     */
    basicauth?: pulumi.Input<boolean>;
    /**
     * Disable old password input requirement while changing ADM agent password.
     */
    disableAgentOldPasswordInput?: pulumi.Input<boolean>;
    /**
     * Disk utilization threshold after which data processing it stopped.
     */
    diskUtilizationThreshold?: pulumi.Input<number>;
    /**
     * Enable API Proxy Credentials.
     */
    enableApiproxyCredentials?: pulumi.Input<boolean>;
    /**
     * Enable Certificate Download.
     */
    enableCertificateDownload?: pulumi.Input<boolean>;
    /**
     * Used to enable/disable CUXIP(Customer User Experience Improvement Program).
     */
    enableCuxip?: pulumi.Input<boolean>;
    /**
     * Flag to enable/disable deleting interface from ADCs on SDX.
     */
    enableDeleteInterfaceOnAdc?: pulumi.Input<boolean>;
    /**
     * This setting enalbes nsrecover login for SVM.
     */
    enableNsrecoverLogin?: pulumi.Input<boolean>;
    /**
     * Enables session timeout feature.
     */
    enableSessionTimeout?: pulumi.Input<boolean>;
    /**
     * Enable Shell access for non-nsroot User(s).
     */
    enableShellAccess?: pulumi.Input<boolean>;
    /**
     * Enable Metering for NetScaler VPX on SDX.
     */
    isMeteringEnabled?: pulumi.Input<boolean>;
    /**
     * Count for number of NetScaler images to be saved in Agent.
     */
    keepAdcImageCount?: pulumi.Input<number>;
    /**
     * Agent web socket keep alive ping interval for the system.
     */
    keepAlivePingInterval?: pulumi.Input<number>;
    /**
     * Prompt Credentials for Stylebooks.
     */
    promptCredsForStylebooks?: pulumi.Input<boolean>;
    /**
     * Secure Access only.
     */
    secureAccessOnly?: pulumi.Input<boolean>;
    /**
     * Session timeout for the system.
     */
    sessionTimeout?: pulumi.Input<number>;
    /**
     * Session timeout unit for the system. Possible Values: [ Minutes, Hours ]
     */
    sessionTimeoutUnit?: pulumi.Input<string>;
    /**
     * Communication with Instances. Minimum length = 1 Maximum length = 10. Possible Values: [ http, https ]
     */
    svmNsComm?: pulumi.Input<string>;
}
