// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CloudAzureIntegrations extends pulumi.CustomResource {
    /**
     * Get an existing CloudAzureIntegrations resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudAzureIntegrationsState, opts?: pulumi.CustomResourceOptions): CloudAzureIntegrations {
        return new CloudAzureIntegrations(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'newrelic:index/cloudAzureIntegrations:CloudAzureIntegrations';

    /**
     * Returns true if the given object is an instance of CloudAzureIntegrations.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudAzureIntegrations {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudAzureIntegrations.__pulumiType;
    }

    /**
     * The ID of the account in New Relic.
     */
    public readonly accountId!: pulumi.Output<number>;
    /**
     * The Azure api management integration
     */
    public readonly apiManagement!: pulumi.Output<outputs.CloudAzureIntegrationsApiManagement | undefined>;
    /**
     * The Azure app gateway integration
     */
    public readonly appGateway!: pulumi.Output<outputs.CloudAzureIntegrationsAppGateway | undefined>;
    /**
     * The Azure app services
     */
    public readonly appService!: pulumi.Output<outputs.CloudAzureIntegrationsAppService | undefined>;
    /**
     * The Azure containers
     */
    public readonly containers!: pulumi.Output<outputs.CloudAzureIntegrationsContainers | undefined>;
    /**
     * The Azure cosmoDB
     */
    public readonly cosmosDb!: pulumi.Output<outputs.CloudAzureIntegrationsCosmosDb | undefined>;
    /**
     * The Azure cost management
     */
    public readonly costManagement!: pulumi.Output<outputs.CloudAzureIntegrationsCostManagement | undefined>;
    /**
     * The Azure data factory
     */
    public readonly dataFactory!: pulumi.Output<outputs.CloudAzureIntegrationsDataFactory | undefined>;
    /**
     * The Azure event hub
     */
    public readonly eventHub!: pulumi.Output<outputs.CloudAzureIntegrationsEventHub | undefined>;
    /**
     * The Azure express route
     */
    public readonly expressRoute!: pulumi.Output<outputs.CloudAzureIntegrationsExpressRoute | undefined>;
    /**
     * The Azure firewalls
     */
    public readonly firewalls!: pulumi.Output<outputs.CloudAzureIntegrationsFirewalls | undefined>;
    /**
     * The Azure front door
     */
    public readonly frontDoor!: pulumi.Output<outputs.CloudAzureIntegrationsFrontDoor | undefined>;
    /**
     * The Azure functions
     */
    public readonly functions!: pulumi.Output<outputs.CloudAzureIntegrationsFunctions | undefined>;
    /**
     * The Azure key vault
     */
    public readonly keyVault!: pulumi.Output<outputs.CloudAzureIntegrationsKeyVault | undefined>;
    /**
     * The ID of the linked Azure account in New Relic
     */
    public readonly linkedAccountId!: pulumi.Output<number>;
    /**
     * The Azure load balancer
     */
    public readonly loadBalancer!: pulumi.Output<outputs.CloudAzureIntegrationsLoadBalancer | undefined>;
    /**
     * The Azure logic apps
     */
    public readonly logicApps!: pulumi.Output<outputs.CloudAzureIntegrationsLogicApps | undefined>;
    /**
     * The Azure machine learning
     */
    public readonly machineLearning!: pulumi.Output<outputs.CloudAzureIntegrationsMachineLearning | undefined>;
    /**
     * The Azure Maria DB
     */
    public readonly mariaDb!: pulumi.Output<outputs.CloudAzureIntegrationsMariaDb | undefined>;
    /**
     * The Azure Monitor
     */
    public readonly monitor!: pulumi.Output<outputs.CloudAzureIntegrationsMonitor | undefined>;
    /**
     * The Azure mysql
     */
    public readonly mysql!: pulumi.Output<outputs.CloudAzureIntegrationsMysql | undefined>;
    /**
     * The Azure mysql flexible service integration
     */
    public readonly mysqlFlexible!: pulumi.Output<outputs.CloudAzureIntegrationsMysqlFlexible | undefined>;
    /**
     * The Azure postgresql
     */
    public readonly postgresql!: pulumi.Output<outputs.CloudAzureIntegrationsPostgresql | undefined>;
    /**
     * The Azure postgresql flexible service integration
     */
    public readonly postgresqlFlexible!: pulumi.Output<outputs.CloudAzureIntegrationsPostgresqlFlexible | undefined>;
    /**
     * The Azure powerBI dedicated
     */
    public readonly powerBiDedicated!: pulumi.Output<outputs.CloudAzureIntegrationsPowerBiDedicated | undefined>;
    /**
     * The Azure redis cache
     */
    public readonly redisCache!: pulumi.Output<outputs.CloudAzureIntegrationsRedisCache | undefined>;
    /**
     * The Azure service bus
     */
    public readonly serviceBus!: pulumi.Output<outputs.CloudAzureIntegrationsServiceBus | undefined>;
    /**
     * The Azure sql
     */
    public readonly sql!: pulumi.Output<outputs.CloudAzureIntegrationsSql | undefined>;
    /**
     * The Azure sql managed
     */
    public readonly sqlManaged!: pulumi.Output<outputs.CloudAzureIntegrationsSqlManaged | undefined>;
    /**
     * The Azure storage
     */
    public readonly storage!: pulumi.Output<outputs.CloudAzureIntegrationsStorage | undefined>;
    /**
     * The Azure virtual machine
     */
    public readonly virtualMachine!: pulumi.Output<outputs.CloudAzureIntegrationsVirtualMachine | undefined>;
    /**
     * The Azure virtual networks
     */
    public readonly virtualNetworks!: pulumi.Output<outputs.CloudAzureIntegrationsVirtualNetworks | undefined>;
    /**
     * The Azure Vms
     */
    public readonly vms!: pulumi.Output<outputs.CloudAzureIntegrationsVms | undefined>;
    /**
     * The Azure vpn gateway
     */
    public readonly vpnGateway!: pulumi.Output<outputs.CloudAzureIntegrationsVpnGateway | undefined>;

    /**
     * Create a CloudAzureIntegrations resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudAzureIntegrationsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudAzureIntegrationsArgs | CloudAzureIntegrationsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudAzureIntegrationsState | undefined;
            resourceInputs["accountId"] = state ? state.accountId : undefined;
            resourceInputs["apiManagement"] = state ? state.apiManagement : undefined;
            resourceInputs["appGateway"] = state ? state.appGateway : undefined;
            resourceInputs["appService"] = state ? state.appService : undefined;
            resourceInputs["containers"] = state ? state.containers : undefined;
            resourceInputs["cosmosDb"] = state ? state.cosmosDb : undefined;
            resourceInputs["costManagement"] = state ? state.costManagement : undefined;
            resourceInputs["dataFactory"] = state ? state.dataFactory : undefined;
            resourceInputs["eventHub"] = state ? state.eventHub : undefined;
            resourceInputs["expressRoute"] = state ? state.expressRoute : undefined;
            resourceInputs["firewalls"] = state ? state.firewalls : undefined;
            resourceInputs["frontDoor"] = state ? state.frontDoor : undefined;
            resourceInputs["functions"] = state ? state.functions : undefined;
            resourceInputs["keyVault"] = state ? state.keyVault : undefined;
            resourceInputs["linkedAccountId"] = state ? state.linkedAccountId : undefined;
            resourceInputs["loadBalancer"] = state ? state.loadBalancer : undefined;
            resourceInputs["logicApps"] = state ? state.logicApps : undefined;
            resourceInputs["machineLearning"] = state ? state.machineLearning : undefined;
            resourceInputs["mariaDb"] = state ? state.mariaDb : undefined;
            resourceInputs["monitor"] = state ? state.monitor : undefined;
            resourceInputs["mysql"] = state ? state.mysql : undefined;
            resourceInputs["mysqlFlexible"] = state ? state.mysqlFlexible : undefined;
            resourceInputs["postgresql"] = state ? state.postgresql : undefined;
            resourceInputs["postgresqlFlexible"] = state ? state.postgresqlFlexible : undefined;
            resourceInputs["powerBiDedicated"] = state ? state.powerBiDedicated : undefined;
            resourceInputs["redisCache"] = state ? state.redisCache : undefined;
            resourceInputs["serviceBus"] = state ? state.serviceBus : undefined;
            resourceInputs["sql"] = state ? state.sql : undefined;
            resourceInputs["sqlManaged"] = state ? state.sqlManaged : undefined;
            resourceInputs["storage"] = state ? state.storage : undefined;
            resourceInputs["virtualMachine"] = state ? state.virtualMachine : undefined;
            resourceInputs["virtualNetworks"] = state ? state.virtualNetworks : undefined;
            resourceInputs["vms"] = state ? state.vms : undefined;
            resourceInputs["vpnGateway"] = state ? state.vpnGateway : undefined;
        } else {
            const args = argsOrState as CloudAzureIntegrationsArgs | undefined;
            if ((!args || args.linkedAccountId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'linkedAccountId'");
            }
            resourceInputs["accountId"] = args ? args.accountId : undefined;
            resourceInputs["apiManagement"] = args ? args.apiManagement : undefined;
            resourceInputs["appGateway"] = args ? args.appGateway : undefined;
            resourceInputs["appService"] = args ? args.appService : undefined;
            resourceInputs["containers"] = args ? args.containers : undefined;
            resourceInputs["cosmosDb"] = args ? args.cosmosDb : undefined;
            resourceInputs["costManagement"] = args ? args.costManagement : undefined;
            resourceInputs["dataFactory"] = args ? args.dataFactory : undefined;
            resourceInputs["eventHub"] = args ? args.eventHub : undefined;
            resourceInputs["expressRoute"] = args ? args.expressRoute : undefined;
            resourceInputs["firewalls"] = args ? args.firewalls : undefined;
            resourceInputs["frontDoor"] = args ? args.frontDoor : undefined;
            resourceInputs["functions"] = args ? args.functions : undefined;
            resourceInputs["keyVault"] = args ? args.keyVault : undefined;
            resourceInputs["linkedAccountId"] = args ? args.linkedAccountId : undefined;
            resourceInputs["loadBalancer"] = args ? args.loadBalancer : undefined;
            resourceInputs["logicApps"] = args ? args.logicApps : undefined;
            resourceInputs["machineLearning"] = args ? args.machineLearning : undefined;
            resourceInputs["mariaDb"] = args ? args.mariaDb : undefined;
            resourceInputs["monitor"] = args ? args.monitor : undefined;
            resourceInputs["mysql"] = args ? args.mysql : undefined;
            resourceInputs["mysqlFlexible"] = args ? args.mysqlFlexible : undefined;
            resourceInputs["postgresql"] = args ? args.postgresql : undefined;
            resourceInputs["postgresqlFlexible"] = args ? args.postgresqlFlexible : undefined;
            resourceInputs["powerBiDedicated"] = args ? args.powerBiDedicated : undefined;
            resourceInputs["redisCache"] = args ? args.redisCache : undefined;
            resourceInputs["serviceBus"] = args ? args.serviceBus : undefined;
            resourceInputs["sql"] = args ? args.sql : undefined;
            resourceInputs["sqlManaged"] = args ? args.sqlManaged : undefined;
            resourceInputs["storage"] = args ? args.storage : undefined;
            resourceInputs["virtualMachine"] = args ? args.virtualMachine : undefined;
            resourceInputs["virtualNetworks"] = args ? args.virtualNetworks : undefined;
            resourceInputs["vms"] = args ? args.vms : undefined;
            resourceInputs["vpnGateway"] = args ? args.vpnGateway : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CloudAzureIntegrations.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CloudAzureIntegrations resources.
 */
export interface CloudAzureIntegrationsState {
    /**
     * The ID of the account in New Relic.
     */
    accountId?: pulumi.Input<number>;
    /**
     * The Azure api management integration
     */
    apiManagement?: pulumi.Input<inputs.CloudAzureIntegrationsApiManagement>;
    /**
     * The Azure app gateway integration
     */
    appGateway?: pulumi.Input<inputs.CloudAzureIntegrationsAppGateway>;
    /**
     * The Azure app services
     */
    appService?: pulumi.Input<inputs.CloudAzureIntegrationsAppService>;
    /**
     * The Azure containers
     */
    containers?: pulumi.Input<inputs.CloudAzureIntegrationsContainers>;
    /**
     * The Azure cosmoDB
     */
    cosmosDb?: pulumi.Input<inputs.CloudAzureIntegrationsCosmosDb>;
    /**
     * The Azure cost management
     */
    costManagement?: pulumi.Input<inputs.CloudAzureIntegrationsCostManagement>;
    /**
     * The Azure data factory
     */
    dataFactory?: pulumi.Input<inputs.CloudAzureIntegrationsDataFactory>;
    /**
     * The Azure event hub
     */
    eventHub?: pulumi.Input<inputs.CloudAzureIntegrationsEventHub>;
    /**
     * The Azure express route
     */
    expressRoute?: pulumi.Input<inputs.CloudAzureIntegrationsExpressRoute>;
    /**
     * The Azure firewalls
     */
    firewalls?: pulumi.Input<inputs.CloudAzureIntegrationsFirewalls>;
    /**
     * The Azure front door
     */
    frontDoor?: pulumi.Input<inputs.CloudAzureIntegrationsFrontDoor>;
    /**
     * The Azure functions
     */
    functions?: pulumi.Input<inputs.CloudAzureIntegrationsFunctions>;
    /**
     * The Azure key vault
     */
    keyVault?: pulumi.Input<inputs.CloudAzureIntegrationsKeyVault>;
    /**
     * The ID of the linked Azure account in New Relic
     */
    linkedAccountId?: pulumi.Input<number>;
    /**
     * The Azure load balancer
     */
    loadBalancer?: pulumi.Input<inputs.CloudAzureIntegrationsLoadBalancer>;
    /**
     * The Azure logic apps
     */
    logicApps?: pulumi.Input<inputs.CloudAzureIntegrationsLogicApps>;
    /**
     * The Azure machine learning
     */
    machineLearning?: pulumi.Input<inputs.CloudAzureIntegrationsMachineLearning>;
    /**
     * The Azure Maria DB
     */
    mariaDb?: pulumi.Input<inputs.CloudAzureIntegrationsMariaDb>;
    /**
     * The Azure Monitor
     */
    monitor?: pulumi.Input<inputs.CloudAzureIntegrationsMonitor>;
    /**
     * The Azure mysql
     */
    mysql?: pulumi.Input<inputs.CloudAzureIntegrationsMysql>;
    /**
     * The Azure mysql flexible service integration
     */
    mysqlFlexible?: pulumi.Input<inputs.CloudAzureIntegrationsMysqlFlexible>;
    /**
     * The Azure postgresql
     */
    postgresql?: pulumi.Input<inputs.CloudAzureIntegrationsPostgresql>;
    /**
     * The Azure postgresql flexible service integration
     */
    postgresqlFlexible?: pulumi.Input<inputs.CloudAzureIntegrationsPostgresqlFlexible>;
    /**
     * The Azure powerBI dedicated
     */
    powerBiDedicated?: pulumi.Input<inputs.CloudAzureIntegrationsPowerBiDedicated>;
    /**
     * The Azure redis cache
     */
    redisCache?: pulumi.Input<inputs.CloudAzureIntegrationsRedisCache>;
    /**
     * The Azure service bus
     */
    serviceBus?: pulumi.Input<inputs.CloudAzureIntegrationsServiceBus>;
    /**
     * The Azure sql
     */
    sql?: pulumi.Input<inputs.CloudAzureIntegrationsSql>;
    /**
     * The Azure sql managed
     */
    sqlManaged?: pulumi.Input<inputs.CloudAzureIntegrationsSqlManaged>;
    /**
     * The Azure storage
     */
    storage?: pulumi.Input<inputs.CloudAzureIntegrationsStorage>;
    /**
     * The Azure virtual machine
     */
    virtualMachine?: pulumi.Input<inputs.CloudAzureIntegrationsVirtualMachine>;
    /**
     * The Azure virtual networks
     */
    virtualNetworks?: pulumi.Input<inputs.CloudAzureIntegrationsVirtualNetworks>;
    /**
     * The Azure Vms
     */
    vms?: pulumi.Input<inputs.CloudAzureIntegrationsVms>;
    /**
     * The Azure vpn gateway
     */
    vpnGateway?: pulumi.Input<inputs.CloudAzureIntegrationsVpnGateway>;
}

/**
 * The set of arguments for constructing a CloudAzureIntegrations resource.
 */
export interface CloudAzureIntegrationsArgs {
    /**
     * The ID of the account in New Relic.
     */
    accountId?: pulumi.Input<number>;
    /**
     * The Azure api management integration
     */
    apiManagement?: pulumi.Input<inputs.CloudAzureIntegrationsApiManagement>;
    /**
     * The Azure app gateway integration
     */
    appGateway?: pulumi.Input<inputs.CloudAzureIntegrationsAppGateway>;
    /**
     * The Azure app services
     */
    appService?: pulumi.Input<inputs.CloudAzureIntegrationsAppService>;
    /**
     * The Azure containers
     */
    containers?: pulumi.Input<inputs.CloudAzureIntegrationsContainers>;
    /**
     * The Azure cosmoDB
     */
    cosmosDb?: pulumi.Input<inputs.CloudAzureIntegrationsCosmosDb>;
    /**
     * The Azure cost management
     */
    costManagement?: pulumi.Input<inputs.CloudAzureIntegrationsCostManagement>;
    /**
     * The Azure data factory
     */
    dataFactory?: pulumi.Input<inputs.CloudAzureIntegrationsDataFactory>;
    /**
     * The Azure event hub
     */
    eventHub?: pulumi.Input<inputs.CloudAzureIntegrationsEventHub>;
    /**
     * The Azure express route
     */
    expressRoute?: pulumi.Input<inputs.CloudAzureIntegrationsExpressRoute>;
    /**
     * The Azure firewalls
     */
    firewalls?: pulumi.Input<inputs.CloudAzureIntegrationsFirewalls>;
    /**
     * The Azure front door
     */
    frontDoor?: pulumi.Input<inputs.CloudAzureIntegrationsFrontDoor>;
    /**
     * The Azure functions
     */
    functions?: pulumi.Input<inputs.CloudAzureIntegrationsFunctions>;
    /**
     * The Azure key vault
     */
    keyVault?: pulumi.Input<inputs.CloudAzureIntegrationsKeyVault>;
    /**
     * The ID of the linked Azure account in New Relic
     */
    linkedAccountId: pulumi.Input<number>;
    /**
     * The Azure load balancer
     */
    loadBalancer?: pulumi.Input<inputs.CloudAzureIntegrationsLoadBalancer>;
    /**
     * The Azure logic apps
     */
    logicApps?: pulumi.Input<inputs.CloudAzureIntegrationsLogicApps>;
    /**
     * The Azure machine learning
     */
    machineLearning?: pulumi.Input<inputs.CloudAzureIntegrationsMachineLearning>;
    /**
     * The Azure Maria DB
     */
    mariaDb?: pulumi.Input<inputs.CloudAzureIntegrationsMariaDb>;
    /**
     * The Azure Monitor
     */
    monitor?: pulumi.Input<inputs.CloudAzureIntegrationsMonitor>;
    /**
     * The Azure mysql
     */
    mysql?: pulumi.Input<inputs.CloudAzureIntegrationsMysql>;
    /**
     * The Azure mysql flexible service integration
     */
    mysqlFlexible?: pulumi.Input<inputs.CloudAzureIntegrationsMysqlFlexible>;
    /**
     * The Azure postgresql
     */
    postgresql?: pulumi.Input<inputs.CloudAzureIntegrationsPostgresql>;
    /**
     * The Azure postgresql flexible service integration
     */
    postgresqlFlexible?: pulumi.Input<inputs.CloudAzureIntegrationsPostgresqlFlexible>;
    /**
     * The Azure powerBI dedicated
     */
    powerBiDedicated?: pulumi.Input<inputs.CloudAzureIntegrationsPowerBiDedicated>;
    /**
     * The Azure redis cache
     */
    redisCache?: pulumi.Input<inputs.CloudAzureIntegrationsRedisCache>;
    /**
     * The Azure service bus
     */
    serviceBus?: pulumi.Input<inputs.CloudAzureIntegrationsServiceBus>;
    /**
     * The Azure sql
     */
    sql?: pulumi.Input<inputs.CloudAzureIntegrationsSql>;
    /**
     * The Azure sql managed
     */
    sqlManaged?: pulumi.Input<inputs.CloudAzureIntegrationsSqlManaged>;
    /**
     * The Azure storage
     */
    storage?: pulumi.Input<inputs.CloudAzureIntegrationsStorage>;
    /**
     * The Azure virtual machine
     */
    virtualMachine?: pulumi.Input<inputs.CloudAzureIntegrationsVirtualMachine>;
    /**
     * The Azure virtual networks
     */
    virtualNetworks?: pulumi.Input<inputs.CloudAzureIntegrationsVirtualNetworks>;
    /**
     * The Azure Vms
     */
    vms?: pulumi.Input<inputs.CloudAzureIntegrationsVms>;
    /**
     * The Azure vpn gateway
     */
    vpnGateway?: pulumi.Input<inputs.CloudAzureIntegrationsVpnGateway>;
}
