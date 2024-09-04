// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class StfWebreceiverService extends pulumi.CustomResource {
    /**
     * Get an existing StfWebreceiverService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StfWebreceiverServiceState, opts?: pulumi.CustomResourceOptions): StfWebreceiverService {
        return new StfWebreceiverService(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrix:index/stfWebreceiverService:StfWebreceiverService';

    /**
     * Returns true if the given object is an instance of StfWebreceiverService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StfWebreceiverService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StfWebreceiverService.__pulumiType;
    }

    /**
     * Application shortcuts configurations for the WebReceiver.
     */
    public readonly applicationShortcuts!: pulumi.Output<outputs.StfWebreceiverServiceApplicationShortcuts | undefined>;
    /**
     * WebReceiver Authentication Manager client options.
     */
    public readonly authenticationManager!: pulumi.Output<outputs.StfWebreceiverServiceAuthenticationManager | undefined>;
    /**
     * The authentication methods supported by the WebReceiver.
     */
    public readonly authenticationMethods!: pulumi.Output<string[]>;
    /**
     * Communication settings used for the WebReceiver proxy.
     */
    public readonly communication!: pulumi.Output<outputs.StfWebreceiverServiceCommunication | undefined>;
    /**
     * The friendly name of the WebReceiver
     */
    public readonly friendlyName!: pulumi.Output<string>;
    /**
     * Pluin Assistant configuration for the WebReceiver.
     */
    public readonly pluginAssistant!: pulumi.Output<outputs.StfWebreceiverServicePluginAssistant | undefined>;
    /**
     * Resources Service settings for the WebReceiver.
     */
    public readonly resourcesService!: pulumi.Output<outputs.StfWebreceiverServiceResourcesService | undefined>;
    /**
     * The IIS site id of the StoreFront WebReceiver. Defaults to 1.
     */
    public readonly siteId!: pulumi.Output<string>;
    /**
     * The Virtual Path of the StoreFront Store Service linked to the WebReceiver.
     */
    public readonly storeVirtualPath!: pulumi.Output<string>;
    /**
     * Communication settings used for the WebReceiver proxy.
     */
    public readonly strictTransportSecurity!: pulumi.Output<outputs.StfWebreceiverServiceStrictTransportSecurity | undefined>;
    /**
     * User interface configuration for the WebReceiver.
     */
    public readonly userInterface!: pulumi.Output<outputs.StfWebreceiverServiceUserInterface | undefined>;
    /**
     * The IIS VirtualPath at which the WebReceiver will be configured to be accessed by Receivers.
     */
    public readonly virtualPath!: pulumi.Output<string>;
    /**
     * Site Styles for the Web Receiver for Website.
     */
    public readonly webReceiverSiteStyle!: pulumi.Output<outputs.StfWebreceiverServiceWebReceiverSiteStyle | undefined>;

    /**
     * Create a StfWebreceiverService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StfWebreceiverServiceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: StfWebreceiverServiceArgs | StfWebreceiverServiceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as StfWebreceiverServiceState | undefined;
            resourceInputs["applicationShortcuts"] = state ? state.applicationShortcuts : undefined;
            resourceInputs["authenticationManager"] = state ? state.authenticationManager : undefined;
            resourceInputs["authenticationMethods"] = state ? state.authenticationMethods : undefined;
            resourceInputs["communication"] = state ? state.communication : undefined;
            resourceInputs["friendlyName"] = state ? state.friendlyName : undefined;
            resourceInputs["pluginAssistant"] = state ? state.pluginAssistant : undefined;
            resourceInputs["resourcesService"] = state ? state.resourcesService : undefined;
            resourceInputs["siteId"] = state ? state.siteId : undefined;
            resourceInputs["storeVirtualPath"] = state ? state.storeVirtualPath : undefined;
            resourceInputs["strictTransportSecurity"] = state ? state.strictTransportSecurity : undefined;
            resourceInputs["userInterface"] = state ? state.userInterface : undefined;
            resourceInputs["virtualPath"] = state ? state.virtualPath : undefined;
            resourceInputs["webReceiverSiteStyle"] = state ? state.webReceiverSiteStyle : undefined;
        } else {
            const args = argsOrState as StfWebreceiverServiceArgs | undefined;
            if ((!args || args.storeVirtualPath === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storeVirtualPath'");
            }
            if ((!args || args.virtualPath === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualPath'");
            }
            resourceInputs["applicationShortcuts"] = args ? args.applicationShortcuts : undefined;
            resourceInputs["authenticationManager"] = args ? args.authenticationManager : undefined;
            resourceInputs["authenticationMethods"] = args ? args.authenticationMethods : undefined;
            resourceInputs["communication"] = args ? args.communication : undefined;
            resourceInputs["friendlyName"] = args ? args.friendlyName : undefined;
            resourceInputs["pluginAssistant"] = args ? args.pluginAssistant : undefined;
            resourceInputs["resourcesService"] = args ? args.resourcesService : undefined;
            resourceInputs["siteId"] = args ? args.siteId : undefined;
            resourceInputs["storeVirtualPath"] = args ? args.storeVirtualPath : undefined;
            resourceInputs["strictTransportSecurity"] = args ? args.strictTransportSecurity : undefined;
            resourceInputs["userInterface"] = args ? args.userInterface : undefined;
            resourceInputs["virtualPath"] = args ? args.virtualPath : undefined;
            resourceInputs["webReceiverSiteStyle"] = args ? args.webReceiverSiteStyle : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(StfWebreceiverService.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering StfWebreceiverService resources.
 */
export interface StfWebreceiverServiceState {
    /**
     * Application shortcuts configurations for the WebReceiver.
     */
    applicationShortcuts?: pulumi.Input<inputs.StfWebreceiverServiceApplicationShortcuts>;
    /**
     * WebReceiver Authentication Manager client options.
     */
    authenticationManager?: pulumi.Input<inputs.StfWebreceiverServiceAuthenticationManager>;
    /**
     * The authentication methods supported by the WebReceiver.
     */
    authenticationMethods?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Communication settings used for the WebReceiver proxy.
     */
    communication?: pulumi.Input<inputs.StfWebreceiverServiceCommunication>;
    /**
     * The friendly name of the WebReceiver
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * Pluin Assistant configuration for the WebReceiver.
     */
    pluginAssistant?: pulumi.Input<inputs.StfWebreceiverServicePluginAssistant>;
    /**
     * Resources Service settings for the WebReceiver.
     */
    resourcesService?: pulumi.Input<inputs.StfWebreceiverServiceResourcesService>;
    /**
     * The IIS site id of the StoreFront WebReceiver. Defaults to 1.
     */
    siteId?: pulumi.Input<string>;
    /**
     * The Virtual Path of the StoreFront Store Service linked to the WebReceiver.
     */
    storeVirtualPath?: pulumi.Input<string>;
    /**
     * Communication settings used for the WebReceiver proxy.
     */
    strictTransportSecurity?: pulumi.Input<inputs.StfWebreceiverServiceStrictTransportSecurity>;
    /**
     * User interface configuration for the WebReceiver.
     */
    userInterface?: pulumi.Input<inputs.StfWebreceiverServiceUserInterface>;
    /**
     * The IIS VirtualPath at which the WebReceiver will be configured to be accessed by Receivers.
     */
    virtualPath?: pulumi.Input<string>;
    /**
     * Site Styles for the Web Receiver for Website.
     */
    webReceiverSiteStyle?: pulumi.Input<inputs.StfWebreceiverServiceWebReceiverSiteStyle>;
}

/**
 * The set of arguments for constructing a StfWebreceiverService resource.
 */
export interface StfWebreceiverServiceArgs {
    /**
     * Application shortcuts configurations for the WebReceiver.
     */
    applicationShortcuts?: pulumi.Input<inputs.StfWebreceiverServiceApplicationShortcuts>;
    /**
     * WebReceiver Authentication Manager client options.
     */
    authenticationManager?: pulumi.Input<inputs.StfWebreceiverServiceAuthenticationManager>;
    /**
     * The authentication methods supported by the WebReceiver.
     */
    authenticationMethods?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Communication settings used for the WebReceiver proxy.
     */
    communication?: pulumi.Input<inputs.StfWebreceiverServiceCommunication>;
    /**
     * The friendly name of the WebReceiver
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * Pluin Assistant configuration for the WebReceiver.
     */
    pluginAssistant?: pulumi.Input<inputs.StfWebreceiverServicePluginAssistant>;
    /**
     * Resources Service settings for the WebReceiver.
     */
    resourcesService?: pulumi.Input<inputs.StfWebreceiverServiceResourcesService>;
    /**
     * The IIS site id of the StoreFront WebReceiver. Defaults to 1.
     */
    siteId?: pulumi.Input<string>;
    /**
     * The Virtual Path of the StoreFront Store Service linked to the WebReceiver.
     */
    storeVirtualPath: pulumi.Input<string>;
    /**
     * Communication settings used for the WebReceiver proxy.
     */
    strictTransportSecurity?: pulumi.Input<inputs.StfWebreceiverServiceStrictTransportSecurity>;
    /**
     * User interface configuration for the WebReceiver.
     */
    userInterface?: pulumi.Input<inputs.StfWebreceiverServiceUserInterface>;
    /**
     * The IIS VirtualPath at which the WebReceiver will be configured to be accessed by Receivers.
     */
    virtualPath: pulumi.Input<string>;
    /**
     * Site Styles for the Web Receiver for Website.
     */
    webReceiverSiteStyle?: pulumi.Input<inputs.StfWebreceiverServiceWebReceiverSiteStyle>;
}
